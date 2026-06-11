import { Play, CheckCircle2, ChevronRight, TrendingUp, Shield, Zap, DollarSign, Users } from 'lucide-react';

export default function Affiliates() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary/20">
      {/* Top Banner */}
      <div className="bg-primary text-white text-xs font-bold py-3 px-4 text-center tracking-wide uppercase">
        🚀 Vagas limitadas para novos parceiros - Aproveite o preço promocional
      </div>

      {/* Hero Section / VSL */}
      <section className="bg-white border-b border-slate-200 pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-bold mb-8 border border-green-200 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Oportunidade de Negócio Validada
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            Descubra o Método Exato Para Faturar <span className="text-primary underline decoration-primary/30 underline-offset-4">Todos os Dias</span> Vendendo Serviços Sociais
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 mb-12 font-medium max-w-3xl mx-auto">
            Sem precisar aparecer, sem precisar criar conteúdo e com um sistema 100% automatizado que trabalha para você enquanto você dorme.
          </p>

          {/* VSL Placeholder */}
          <div className="relative max-w-4xl mx-auto aspect-video bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border-8 border-white group cursor-pointer ring-1 ring-slate-200">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-center justify-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-6 left-0 right-0 text-center text-white/80 font-medium text-sm">
              Assista ao vídeo acima para entender como funciona
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-[0_10px_40px_rgba(34,197,94,0.4)] hover:-translate-y-1 flex items-center gap-3">
              Quero Minha Licença de Revenda <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <p className="text-sm text-slate-400 mt-4 font-medium flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" /> Compra 100% Segura. Acesso Imediato.
          </p>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Como funciona a Revenda SMM?</h2>
          <p className="text-slate-500 font-medium">Um ecossistema criado para maximizar seu lucro com zero dor de cabeça.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Altíssima Margem</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Você compra os serviços a preço de custo (atacado) e revende pelo preço que quiser. Suas margens de lucro podem ultrapassar 300% em cada venda.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">2. 100% Automatizado</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              O cliente paga, o sistema reconhece o PIX e envia os seguidores automaticamente pela API. Você não precisa fazer nada manualmente.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <DollarSign className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Dashboard Completo</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Tenha controle total do seu negócio com um painel administrativo exclusivo. Acompanhe vendas, gerencie seus lucros e solicite saques facilmente.
            </p>
          </div>
        </div>
      </section>

      {/* Inside the Platform */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold leading-tight">
              Tudo o que você precisa para começar a lucrar hoje mesmo
            </h2>
            <p className="text-slate-400 text-lg">
              Ao adquirir sua licença de revenda, você recebe acesso instantâneo a uma plataforma robusta, desenvolvida por especialistas.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="font-medium text-slate-300">Página de vendas B2C de alta conversão pronta para usar.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="font-medium text-slate-300">Integração PIX nativa com confirmação automática.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="font-medium text-slate-300">Painel exclusivo para controle financeiro e saque de lucros.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="font-medium text-slate-300">Suporte e atualizações contínuas do sistema.</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 relative">
            {/* Mockup Dashboard Illustration */}
            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700 shadow-2xl relative z-10 transform lg:rotate-3 transition-transform hover:rotate-0 duration-500">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-700 rounded-xl p-4">
                  <div className="text-slate-400 text-sm mb-1">Vendas Hoje</div>
                  <div className="text-2xl font-bold">R$ 1.240,00</div>
                </div>
                <div className="bg-slate-700 rounded-xl p-4">
                  <div className="text-slate-400 text-sm mb-1">Lucro Líquido</div>
                  <div className="text-2xl font-bold text-green-400">R$ 890,50</div>
                </div>
              </div>
              <div className="h-32 bg-slate-700 rounded-xl w-full"></div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Pricing / Checkout Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Pronto para iniciar seu novo negócio?</h2>
          <p className="text-lg text-slate-500 mb-12">Adquira sua licença vitalícia por um valor simbólico e tenha seu painel operando em minutos.</p>

          <div className="bg-white border-2 border-primary rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(79,70,229,0.15)] relative overflow-hidden max-w-2xl mx-auto">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
              OFERTA DE LANÇAMENTO
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Licença Premium SMM</h3>
              <p className="text-slate-500">Acesso completo à plataforma de revenda</p>
            </div>

            <div className="mb-8 flex justify-center items-end gap-2">
              <span className="text-slate-400 line-through text-2xl font-medium">R$ 497,00</span>
              <span className="text-6xl font-black text-slate-900">R$ 97<span className="text-4xl">,90</span></span>
              <span className="text-slate-500 font-medium mb-2">/único</span>
            </div>

            <ul className="space-y-4 mb-10 text-left max-w-sm mx-auto">
              <li className="flex items-center gap-3 font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Sistema automatizado completo
              </li>
              <li className="flex items-center gap-3 font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Dashboard do Afiliado
              </li>
              <li className="flex items-center gap-3 font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Acesso ao custo de atacado
              </li>
              <li className="flex items-center gap-3 font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Pagamento e saque integrados
              </li>
            </ul>

            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-[0_10px_30px_rgba(34,197,94,0.3)] hover:-translate-y-1">
              Garantir Meu Acesso Agora
            </button>
            <p className="mt-4 text-sm text-slate-400 flex items-center justify-center gap-1 font-medium">
              <Lock className="w-4 h-4" /> Pagamento processado com segurança
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200 text-center text-slate-500 text-sm font-medium">
        <p>© 2026 BoostPanel Afiliados. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
