import { useState, useEffect } from 'react';
import { Users, Heart, ShieldCheck, Zap, Lock, Star, CheckCircle2, ArrowRight, Camera, Music, PlaySquare, User, Mail, CreditCard, Smartphone } from 'lucide-react';
import { supabase } from '../lib/supabase';

const platforms = [
  { id: 'instagram', label: 'Instagram', icon: Camera },
  { id: 'tiktok', label: 'TikTok', icon: Music },
  { id: 'youtube', label: 'YouTube', icon: PlaySquare },
];

const mockPackages = [
  // Instagram
  { id: '11111111-1111-1111-1111-111111111111', platform: 'instagram', type: 'Seguidores BR', qty: 250, price: 12.00, badge: 'Ideal para Teste', icon: Users },
  { id: '22222222-2222-2222-2222-222222222222', platform: 'instagram', type: 'Seguidores BR', qty: 1000, price: 40.00, badge: 'Mais Popular', icon: Users, popular: true },
  { id: '33333333-3333-3333-3333-333333333333', platform: 'instagram', type: 'Seguidores BR', qty: 5000, price: 160.00, badge: 'Melhor Custo-Benefício', icon: Users },
  { id: '44444444-4444-4444-4444-444444444444', platform: 'instagram', type: 'Curtidas', qty: 1000, price: 15.00, badge: null, icon: Heart },
  
  // TikTok
  { id: '55555555-5555-5555-5555-555555555555', platform: 'tiktok', type: 'Seguidores', qty: 500, price: 18.00, badge: null, icon: Users },
  { id: '66666666-6666-6666-6666-666666666666', platform: 'tiktok', type: 'Seguidores', qty: 2000, price: 65.00, badge: 'Popular no TikTok', icon: Users, popular: true },
  { id: '77777777-7777-7777-7777-777777777777', platform: 'tiktok', type: 'Visualizações', qty: 10000, price: 10.00, badge: null, icon: PlaySquare },
  
  // YouTube
  { id: '88888888-8888-8888-8888-888888888888', platform: 'youtube', type: 'Inscritos', qty: 500, price: 80.00, badge: 'Alta Retenção', icon: Users, popular: true },
  { id: '99999999-9999-9999-9999-999999999999', platform: 'youtube', type: 'Visualizações', qty: 5000, price: 45.00, badge: null, icon: PlaySquare },
  { id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', platform: 'youtube', type: 'Horas de Exibição', qty: 1000, price: 150.00, badge: 'Para Monetizar', icon: PlaySquare },
];

export default function Home() {
  const [activePlatform, setActivePlatform] = useState('instagram');
  // Categorias baseadas na plataforma selecionada
  const categories = Array.from(new Set(mockPackages.filter(p => p.platform === activePlatform).map(p => p.type)));
  
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [username, setUsername] = useState('');
  const [customer, setCustomer] = useState({ name: '', email: '', cpf: '', phone: '' });
  const [pixData, setPixData] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  // Sempre que mudar a plataforma, atualiza a aba ativa para a primeira categoria da nova plataforma
  const handlePlatformChange = (platformId: string) => {
    setActivePlatform(platformId);
    const newCategories = Array.from(new Set(mockPackages.filter(p => p.platform === platformId).map(p => p.type)));
    setActiveTab(newCategories[0]);
  };

  const currentPackages = mockPackages.filter(p => p.platform === activePlatform && p.type === activeTab);

  const handleCheckout = async () => {
    if (!username || !customer.name || !customer.email || !customer.cpf || !customer.phone) {
      alert("Por favor, preencha todos os campos do checkout.");
      return;
    }
    
    setIsGenerating(true);
    try {
      const response = await fetch('https://obxvchfmqbwgsgsuxsbk.supabase.co/functions/v1/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          service_id: selectedService.id,
          target_url: username,
          qty: selectedService.qty,
          price: selectedService.price,
          name: `${selectedService.platform} - ${selectedService.qty} ${selectedService.type}`,
          customer: customer
        })
      });

      const data = await response.json();
      
      if (data.brCode) {
        setPixData(data);
      } else {
        console.error("Erro no pagamento:", data);
        alert("Erro ao gerar pagamento: " + (data.error || "Desconhecido"));
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão ao gerar o PIX.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Polling loop to check if order is paid
  useEffect(() => {
    let interval: number;
    
    if (pixData?.orderId && !isPaid) {
      interval = window.setInterval(async () => {
        const { data, error } = await supabase.rpc('get_order_status', { p_order_id: pixData.orderId });
          
        if (!error && data && (data === 'paid' || data === 'processing' || data === 'completed')) {
          setIsPaid(true);
          window.clearInterval(interval);
        }
      }, 2000);
    }

    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [pixData, isPaid]);

  return (
    <div className="min-h-screen bg-background text-text-main font-sans selection:bg-primary/20">
      {/* Top Banner */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 flex justify-center items-center gap-6 font-medium">
        <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-emerald-400" /> Pagamento 100% Seguro via PIX</span>
        <span className="hidden sm:flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Sigilo Absoluto</span>
      </div>

      {/* Navegação */}
      <nav className="border-b border-slate-200/50 bg-white/70 backdrop-blur-xl sticky top-0 z-40 transition-all">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-slate-900">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Zap className="w-5 h-5" fill="currentColor" />
            </div>
            Boost<span className="text-primary">Panel</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#beneficios" className="hover:text-primary transition-colors">Garantias</a>
            <a href="#faq" className="hover:text-primary transition-colors">Dúvidas</a>
          </div>
          <button className="text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-lg transition-colors">
            Acompanhar Pedido
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-28 lg:pt-28 lg:pb-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white">
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:40px_40px]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-700 text-sm font-bold mb-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Avaliado com 4.9/5 por mais de 10.000 clientes</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto">
            Acelere o crescimento de <br className="hidden md:block"/>todas as suas <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">redes sociais</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Aumente sua autoridade no Instagram, TikTok e YouTube. Serviços reais, entrega automatizada e total segurança para o seu perfil. Nenhuma senha é necessária.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#servicos" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 flex items-center justify-center gap-2">
              Ver Pacotes Disponíveis <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Platform & Pricing Section */}
      <section id="servicos" className="bg-slate-50/50 py-24 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Selecione a Rede Social</h2>
          </div>

          {/* Platform Master Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {platforms.map(platform => (
              <button
                key={platform.id}
                onClick={() => handlePlatformChange(platform.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
                  activePlatform === platform.id 
                    ? 'bg-slate-900 text-white shadow-xl scale-105' 
                    : 'bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <platform.icon className={`w-6 h-6 ${activePlatform === platform.id ? 'text-primary' : ''}`} />
                {platform.label}
              </button>
            ))}
          </div>

          <hr className="border-slate-200 max-w-3xl mx-auto mb-12" />

          {/* Service Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-3xl mx-auto p-2 bg-white border border-slate-200/60 rounded-2xl shadow-sm">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`flex-1 min-w-[150px] py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === category 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {currentPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col ${
                  pkg.popular ? 'border-[#00b289] ring-4 ring-[#00b289]/10 shadow-[0_8px_30px_rgb(0,178,137,0.12)]' : 'border-slate-200/60 shadow-sm'
                }`}
              >
                {pkg.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-black tracking-wide whitespace-nowrap shadow-sm ${
                    pkg.popular ? 'bg-[#00b289] text-white' : 'bg-white text-slate-700 border border-slate-200'
                  }`}>
                    {pkg.badge}
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <span className="inline-block p-3 bg-blue-50 text-primary rounded-2xl mb-4">
                    <pkg.icon className="w-6 h-6" />
                  </span>
                  <div className="text-4xl font-black text-slate-900 mb-1">{pkg.qty.toLocaleString('pt-BR')}</div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{pkg.type}</div>
                </div>

                <div className="text-center mb-8">
                  <div className="text-3xl font-extrabold text-slate-900">
                    <span className="text-lg text-slate-400 font-medium mr-1">R$</span>
                    {pkg.price.toFixed(2).replace('.', ',')}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Início Imediato
                  </li>
                  <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Sem Quedas
                  </li>
                </ul>

                <button 
                  onClick={() => {
                    setSelectedService(pkg);
                    setPixData(null);
                  }}
                  className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-[#00b289] hover:bg-[#009c77] text-white shadow-lg shadow-[#00b289]/25 hover:scale-[1.02]' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900 hover:scale-[1.02]'
                  }`}
                >
                  Comprar Agora
                </button>
              </div>
            ))}
            
            {currentPackages.length === 0 && (
              <div className="col-span-full text-center py-12 text-slate-500 font-medium">
                Nenhum pacote encontrado para esta categoria.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal Checkout */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => {
                setSelectedService(null);
                setPixData(null);
                setIsPaid(false);
              }}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
            >
              ✕
            </button>
            
            {!pixData && !isPaid ? (
              <>
                <div className="bg-slate-50/50 -mx-8 -mt-8 p-8 border-b border-slate-100 mb-8 rounded-t-3xl">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="p-3 bg-white shadow-sm text-primary rounded-xl border border-slate-100">
                      <selectedService.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl font-black text-slate-900 mb-1">
                      {selectedService.qty.toLocaleString('pt-BR')} {selectedService.type}
                    </h2>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
                      {selectedService.platform}
                    </p>
                    <div className="inline-flex items-center justify-center bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-200">
                      <span className="text-sm text-slate-400 font-bold mr-2">TOTAL:</span>
                      <span className="text-3xl font-black text-slate-900">
                        <span className="text-xl text-primary mr-1">R$</span>
                        {selectedService.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-8 space-y-5 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">1</div>
                    <h3 className="text-base font-bold text-slate-900">Aonde vamos entregar?</h3>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1.5 ml-1">Link ou @ do perfil ({selectedService.platform})</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                        <Lock className="w-5 h-5" />
                      </div>
                      <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="@seuperfil ou Link"
                        className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border-2 border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-slate-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-semibold text-base"
                      />
                    </div>
                  </div>

                  <div className="w-full h-px bg-slate-100 my-6"></div>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">2</div>
                    <h3 className="text-base font-bold text-slate-900">Seus Dados</h3>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1.5 ml-1">Nome Completo</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                        <User className="w-5 h-5" />
                      </div>
                      <input 
                        type="text" 
                        value={customer.name}
                        onChange={(e) => setCustomer({...customer, name: e.target.value})}
                        placeholder="Nome Completo"
                        className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border-2 border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-slate-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-semibold text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1.5 ml-1">E-mail</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input 
                        type="email" 
                        value={customer.email}
                        onChange={(e) => setCustomer({...customer, email: e.target.value})}
                        placeholder="seu@email.com"
                        className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border-2 border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-slate-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-semibold text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1.5 ml-1">CPF</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <input 
                        type="text" 
                        value={customer.cpf}
                        onChange={(e) => setCustomer({...customer, cpf: e.target.value})}
                        placeholder="000.000.000-00"
                        className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border-2 border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-slate-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-semibold text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1.5 ml-1">WhatsApp</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <input 
                        type="text" 
                        value={customer.phone}
                        onChange={(e) => setCustomer({...customer, phone: e.target.value})}
                        placeholder="(11) 99999-9999"
                        className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border-2 border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-slate-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-semibold text-base"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  disabled={isGenerating}
                  className="w-full bg-[#00b289] hover:bg-[#009c77] disabled:bg-[#00b289]/70 text-white font-black text-lg py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#00b289]/30 flex justify-center items-center gap-2"
                >
                  {isGenerating ? (
                    <span className="flex items-center gap-2">
                       <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processando...
                    </span>
                  ) : "Gerar PIX Copia e Cola"}
                </button>
                <div className="mt-4 flex justify-center items-center gap-2 text-xs text-slate-400 font-medium">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  Pagamento processado com segurança
                </div>
              </>
            ) : !isPaid ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Pague via PIX</h2>
                <p className="text-sm text-slate-500 mb-6">Escaneie o QR Code abaixo ou copie o código PIX.</p>
                
                <div className="bg-slate-50 p-4 rounded-2xl flex justify-center mb-6">
                  <img src={pixData.brCodeBase64} alt="QR Code PIX" className="w-48 h-48 rounded-lg" />
                </div>

                <div className="bg-slate-100 p-3 rounded-xl flex flex-col gap-2 mb-6">
                  <span className="text-xs font-bold text-slate-500 uppercase">PIX Copia e Cola</span>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      readOnly 
                      value={pixData.brCode} 
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-600 outline-none"
                    />
                    <button 
                      onClick={() => navigator.clipboard.writeText(pixData.brCode)}
                      className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-bold"
                    >
                      Copiar
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Aguardando confirmação do pagamento...
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">Pagamento Aprovado!</h2>
                <p className="text-lg text-slate-600 mb-8 font-medium">
                  Seu pedido de <strong>{selectedService.qty.toLocaleString('pt-BR')} {selectedService.type}</strong> foi recebido e já está sendo processado. Em breve você verá os resultados no seu perfil!
                </p>
                <button 
                  onClick={() => {
                    setSelectedService(null);
                    setPixData(null);
                    setIsPaid(false);
                    setUsername('');
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg"
                >
                  Fazer Novo Pedido
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
