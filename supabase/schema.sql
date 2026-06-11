-- Create Custom Types
CREATE TYPE user_role AS ENUM ('admin', 'affiliate');
CREATE TYPE order_status AS ENUM ('pending', 'paid', 'processing', 'completed', 'failed');
CREATE TYPE withdrawal_status AS ENUM ('pending', 'paid', 'rejected');

-- Profiles Table
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    role user_role DEFAULT 'affiliate'::user_role NOT NULL,
    full_name TEXT,
    whatsapp TEXT,
    balance NUMERIC(10, 2) DEFAULT 0.00 NOT NULL,
    pix_key TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Services Table
CREATE TABLE public.services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    smm_service_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    platform TEXT NOT NULL,
    base_cost NUMERIC(10, 2) NOT NULL,
    admin_markup NUMERIC(10, 2) NOT NULL,
    suggested_price NUMERIC(10, 2) NOT NULL,
    is_active BOOLEAN DEFAULT true NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Orders Table
CREATE TABLE public.orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    affiliate_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    service_id UUID REFERENCES public.services(id) ON DELETE RESTRICT NOT NULL,
    target_url TEXT NOT NULL,
    status order_status DEFAULT 'pending'::order_status NOT NULL,
    payment_id TEXT,
    amount_paid NUMERIC(10, 2),
    affiliate_profit NUMERIC(10, 2),
    quantity INTEGER DEFAULT 0 NOT NULL,
    smm_order_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Withdrawals Table
CREATE TABLE public.withdrawals (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    affiliate_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    fee NUMERIC(10, 2) DEFAULT 0.80 NOT NULL,
    status withdrawal_status DEFAULT 'pending'::withdrawal_status NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.withdrawals ENABLE ROW LEVEL SECURITY;

-- Policies for Profiles
CREATE POLICY "Users can view their own profile" 
    ON public.profiles FOR SELECT 
    USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
    ON public.profiles FOR UPDATE 
    USING (auth.uid() = id);

-- Policies for Services
CREATE POLICY "Anyone can view active services" 
    ON public.services FOR SELECT 
    USING (is_active = true);

-- Policies for Orders
CREATE POLICY "Affiliates can view their own orders" 
    ON public.orders FOR SELECT 
    USING (auth.uid() = affiliate_id);

CREATE POLICY "Anyone can insert an order (Checkout)" 
    ON public.orders FOR INSERT 
    WITH CHECK (true);

-- Policies for Withdrawals
CREATE POLICY "Affiliates can view their own withdrawals" 
    ON public.withdrawals FOR SELECT 
    USING (auth.uid() = affiliate_id);

CREATE POLICY "Affiliates can insert their own withdrawals" 
    ON public.withdrawals FOR INSERT 
    WITH CHECK (auth.uid() = affiliate_id);

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER handle_updated_at_profiles
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE PROCEDURE handle_updated_at();

CREATE TRIGGER handle_updated_at_orders
    BEFORE UPDATE ON public.orders
    FOR EACH ROW
    EXECUTE PROCEDURE handle_updated_at();

-- Trigger to automatically create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (new.id, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
