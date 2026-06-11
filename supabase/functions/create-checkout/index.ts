import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const { service_id, target_url, qty, price, name, customer } = await req.json()

    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert({
        service_id: service_id,
        target_url: target_url,
        status: 'pending',
        amount_paid: price,
        quantity: qty
      })
      .select()
      .single()

    if (orderError) throw new Error(`DB Insert Error: ${orderError.message}`)

    const abacatePayKey = Deno.env.get('ABACATE_PAY_KEY_1')
    const priceInCents = Math.round(price * 100)

    const abacatePayload = {
      method: "PIX",
      data: {
        amount: priceInCents,
        description: name || "Pacote SMM",
        expiresIn: 3600,
        externalId: orderData.id,
        metadata: { orderId: orderData.id },
        customer: {
          name: customer?.name || "Cliente BoostPanel",
          email: customer?.email || "contato@boostpanel.com",
          taxId: customer?.cpf || "00000000000",
          cellphone: customer?.phone || "11999999999"
        }
      }
    }

    const response = await fetch("https://api.abacatepay.com/v2/transparents/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${abacatePayKey}`
      },
      body: JSON.stringify(abacatePayload)
    });

    const paymentData = await response.json();

    if (!response.ok || !paymentData.success) {
      throw new Error(`Abacate Pay Error: ${JSON.stringify(paymentData)}`)
    }

    await supabase.from('orders').update({ payment_id: paymentData.data.id }).eq('id', orderData.id)

    return new Response(
      JSON.stringify({ 
        orderId: orderData.id,
        paymentId: paymentData.data.id,
        brCode: paymentData.data.brCode,
        brCodeBase64: paymentData.data.brCodeBase64
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
