import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  try {
    const payload = await req.json()

    // Example Abacate Pay Webhook Payload assumption:
    // { "event": "billing.paid", "data": { "id": "pay_123", "status": "PAID", "metadata": { "orderId": "uuid" } } }
    
    // Only process paid events
    if (payload.event !== 'billing.paid' && payload.data?.status !== 'PAID') {
      return new Response("Not a paid event", { status: 200 })
    }

    const orderId = payload.data?.metadata?.orderId
    if (!orderId) {
      throw new Error("Missing orderId in metadata")
    }

    // 1. Initialize Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // 2. Get Order Details
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('*, services(*)')
      .eq('id', orderId)
      .single()

    if (orderError || !order) throw new Error("Order not found")
    
    if (order.status === 'paid' || order.status === 'processing') {
      return new Response("Order already processed", { status: 200 })
    }

    // 3. Mark as paid
    await supabase
      .from('orders')
      .update({ status: 'paid' })
      .eq('id', orderId)

    // 4. Send to SMM API
    const smmApiKey = Deno.env.get('SMM_API_KEY') ?? ''
    
    // Convert to URL Encoded Form Data as required by SMM API v2
    const smmParams = new URLSearchParams()
    smmParams.append('key', smmApiKey)
    smmParams.append('action', 'add')
    smmParams.append('service', order.services.smm_service_id.toString())
    smmParams.append('link', order.target_url)
    
    // Example: assuming we saved quantity in the order table or derived it.
    // For now, let's assume quantity was passed or we'll default to 1000 for test.
    // In production, we need to add `quantity` column to `orders`.
    // We will hardcode 100 for safety if not found.
    const qty = order.quantity || 100
    smmParams.append('quantity', qty.toString())

    const smmResponse = await fetch("https://smmfollows.com/api/v2", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: smmParams.toString()
    })

    const smmData = await smmResponse.json()

    // 5. Save SMM Order ID back to our database
    if (smmData.order) {
      await supabase
        .from('orders')
        .update({ 
          status: 'processing',
          smm_order_id: smmData.order.toString()
        })
        .eq('id', orderId)
    }

    // 6. Handle Affiliate Profit (if affiliate_id exists)
    if (order.affiliate_id && order.affiliate_profit) {
      // Call a stored procedure (rpc) or increment directly
      // Since we don't have RPC for increment yet, we read and update.
      // NOTE: In production, use RPC to avoid race conditions.
      const { data: profile } = await supabase
        .from('profiles')
        .select('balance')
        .eq('id', order.affiliate_id)
        .single()
        
      if (profile) {
        await supabase
          .from('profiles')
          .update({ balance: Number(profile.balance) + Number(order.affiliate_profit) })
          .eq('id', order.affiliate_id)
      }
    }

    return new Response(JSON.stringify({ success: true, smmOrder: smmData }), {
      headers: { "Content-Type": "application/json" }
    })

  } catch (error: any) {
    console.error("Webhook Error:", error.message)
    return new Response(JSON.stringify({ error: error.message }), { status: 400 })
  }
})
