import { ShieldCheck, Truck, ArrowRight, CheckCircle2, Sparkles, Leaf, ChevronRight, Droplets, Shield, Heart, HelpCircle, Lock } from 'lucide-react';

export default function ClareadorLP() {
  const queryParams = typeof window !== 'undefined' ? window.location.search : '';
  const link1Unidade = `https://entrega.logzz.com.br/pay/rxods-1-unidade${queryParams}`;
  const link3Unidades = `https://entrega.logzz.com.br/pay/ortvw-3-unidades${queryParams}`;

  const handleInitiateCheckout = (productName: string, value: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: productName,
        currency: 'BRL',
        value: value,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-slate-800 selection:bg-[#D4A373]/20">
      
      {/* Top Bar - Elegante */}
      <div className="bg-[#2C362B] text-[#FDFBF7] text-center py-2.5 px-4 text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase">
        ⚠️ ALERTA: Restam apenas 15 unidades com <span className="text-[#D4A373]">Frete Grátis e Pagamento na Entrega</span>
      </div>

      {/* Hero Section Premium com Produto */}
      <header className="relative pt-12 pb-20 px-4 overflow-hidden border-b border-[#EAE6DF] bg-white">
        {/* Decorative Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4A373]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-20 -left-40 w-[400px] h-[400px] bg-[#2C362B]/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          
          {/* Copy Hero */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[#D4A373] text-xs font-bold uppercase tracking-widest mb-6 border border-[#D4A373]/20 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Fórmula 100% Natural
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-[1.15] mb-6 text-[#2C362B] tracking-tight">
              O único que apaga <br className="hidden md:block" />
              <span className="italic font-light text-[#D4A373]">manchas escuras</span> sem efeito rebote.
            </h1>
            
            <p className="text-lg md:text-xl text-[#6B7068] font-light mb-8 leading-relaxed max-w-xl">
              Chega de ter vergonha do seu próprio corpo! O tratamento número 1 para clareamento intensivo de <strong>Rosto (Melasma), Axilas, Virilhas, Foliculite e Bumbum.</strong> Aprovado por mais de 12.450 mulheres.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <a href="#oferta" className="w-full md:w-auto group relative inline-flex flex-col items-center justify-center gap-1 bg-[#2C362B] text-white px-10 py-4 rounded-full font-medium overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(44,54,43,0.5)]">
                <span className="relative z-10 flex items-center gap-2 tracking-widest uppercase text-[13px] font-bold">QUERO CLAREAR MINHAS MANCHAS <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
                <span className="relative z-10 text-[9px] text-white/70 tracking-normal normal-case font-light">E pagar com segurança apenas na entrega</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C362B] to-[#3f4d3e] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
            
            <div className="inline-flex items-center gap-3 bg-[#D4A373]/10 border border-[#D4A373]/30 px-5 py-3 rounded-2xl text-[#2C362B] text-xs font-bold uppercase tracking-wider mx-auto md:mx-0">
              <Truck className="w-5 h-5 text-[#D4A373]" /> 
              <span>ZERO RISCO: <strong className="text-[#D4A373]">PAGUE APENAS NA ENTREGA!</strong></span>
            </div>
          </div>

          {/* Imagem do Produto */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-[#D4A373]/10 blur-[80px] rounded-full scale-75"></div>
            <img src="/produto-1.png" alt="Pote do Amazolé Clareador" className="w-full max-w-md mx-auto relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-pulse" style={{ animationDuration: '4s' }} />
          </div>
        </div>
      </header>

      {/* Seção Emocional & Fórmula (O Segredo) */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#D4A373] mb-4">O Fim do Efeito Rebote</h2>
            <h3 className="font-serif text-3xl md:text-5xl font-light text-[#2C362B] max-w-3xl mx-auto leading-tight">
              Por que você tentou de tudo e a mancha <span className="italic text-[#D4A373]">sempre volta?</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto Emocional e Ingredientes */}
            <div className="space-y-8">
              <p className="text-[#6B7068] text-lg font-light leading-relaxed">
                Nós sabemos a dor que é ter vergonha de usar um biquíni na praia ou uma regata porque a axila está escura. Você já gastou fortunas com ácidos agressivos que descamam, ardem e deixam a pele vermelha. E o pior: no primeiro contato com o sol... <strong>a mancha volta ainda mais escura (O temido Efeito Rebote).</strong>
              </p>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#EAE6DF]">
                <h4 className="font-serif text-2xl text-[#2C362B] mb-6">Ação Clareadora em Todas as Áreas 🌿</h4>
                <p className="text-[#6B7068] text-sm font-light leading-relaxed mb-6">
                  Nossa fórmula inteligente age diretamente na raiz da hiperpigmentação de forma 100% natural, sem descamar e sem dor. Perfeito para:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" />
                    <span className="text-[#4A4C48] text-[15px]"><strong className="text-[#2C362B]">Axilas e Virilhas:</strong> Apaga o escurecimento severo causado por gilete, depilação e atrito de roupas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" />
                    <span className="text-[#4A4C48] text-[15px]"><strong className="text-[#2C362B]">Rosto (Melasma):</strong> O Extrato de Mulateiro desliga a produção descontrolada de melanina, suavizando as manchas do sol e da gravidez.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" />
                    <span className="text-[#4A4C48] text-[15px]"><strong className="text-[#2C362B]">Bumbum e Coxas:</strong> A Argila Branca + Melaleuca secam as bolinhas da foliculite e clareiam as temidas marcas de espinhas nos glúteos e costas.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Imagem Depoimento ZAP (A Prova Social Indiscutível) */}
            <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-[#D4A373] translate-x-3 translate-y-3 rounded-3xl opacity-20"></div>
              <img src="/depoimento-zap.png" alt="Cliente elogiando no WhatsApp" className="w-full max-w-sm mx-auto relative z-10 rounded-3xl shadow-2xl border-4 border-white" />
              <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-[#EAE6DF]">
                <Heart className="w-6 h-6 fill-red-500 text-red-500" />
                <div>
                  <p className="text-[#2C362B] font-bold text-sm">Milhares de clientes felizes</p>
                  <p className="text-[#8B8D88] text-xs">A autoestima de volta em poucas semanas!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Rápidos */}
      <section className="py-16 bg-white border-y border-[#EAE6DF]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center group">
            <Droplets className="w-10 h-10 text-[#D4A373] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-[#2C362B] mb-2 uppercase tracking-wider text-xs">Textura Leve</h3>
            <p className="text-[#6B7068] text-xs font-light">Fácil de espalhar, não deixa a pele oleosa e é ideal para o dia a dia.</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <Shield className="w-10 h-10 text-[#D4A373] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-[#2C362B] mb-2 uppercase tracking-wider text-xs">Sem Contraindicação</h3>
            <p className="text-[#6B7068] text-xs font-light">Seguro para peles super sensíveis, grávidas e durante a lactação.</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <Leaf className="w-10 h-10 text-[#D4A373] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-[#2C362B] mb-2 uppercase tracking-wider text-xs">Sem Ácidos Agressivos</h3>
            <p className="text-[#6B7068] text-xs font-light">Não causa descamação, vermelhidão ou dor. Trata enquanto hidrata.</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <Sparkles className="w-10 h-10 text-[#D4A373] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-[#2C362B] mb-2 uppercase tracking-wider text-xs">Ação Ultrarrápida</h3>
            <p className="text-[#6B7068] text-xs font-light">Clientes relatam a diferença já nos primeiros dias de uso.</p>
          </div>
        </div>
      </section>

      {/* Resultados Reais (Imagens do Usuário e Vídeos) */}
      <section className="py-20 md:py-28 bg-[#FDFBF7] relative px-4">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#D4A373] mb-4">Eficácia Comprovada</h2>
            <h3 className="font-serif text-3xl md:text-5xl font-light text-[#2C362B]">Resultados Reais</h3>
          </div>

          {/* Videos de Depoimento - Minimalistas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[9/16] bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white group">
              <video src="/depoimento-1.mov" controls className="w-full h-full object-cover"></video>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden aspect-[9/16] bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white group">
              <video src="/depoimento-2.mp4" controls className="w-full h-full object-cover"></video>
            </div>
          </div>
          
          {/* Fotos Clean - Sem textos e sem fundos escuros */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Foto 1 */}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-4 border-white transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <img src="/antes-depois-4.png" alt="Melasma Rosto 2 meses" className="w-full h-full object-cover object-center" />
            </div>

            {/* Foto 2 */}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-4 border-white transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <img src="/antes-depois-2.jpeg" alt="Marcas de Acne" className="w-full h-full object-cover object-center" />
            </div>

            {/* Foto 3 */}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-4 border-white transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <img src="/antes-depois-pescoco.jpg" alt="Pescoço 22 dias" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Oferta / Checkout Logzz - Design Glassmorphism Elegante */}
      <section id="oferta" className="py-20 md:py-28 px-4 relative bg-white">
        {/* Background blobs for premium feel */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#D4A373]/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4 text-[#2C362B] tracking-tight">O Fim das Manchas Chegou</h2>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-red-100 mb-4 animate-pulse">
              ⚠️ Restam apenas 15 unidades do Lote Atual
            </div>
            <p className="text-[#6B7068] font-light max-w-xl mx-auto text-lg mt-2">Você não corre nenhum risco: <strong>nós só recebemos quando o entregador deixar o produto nas suas mãos.</strong></p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 justify-center items-stretch mt-12">
            
            {/* Kit Básico - 1 Unidade */}
            <div className="w-full md:w-[380px] bg-white rounded-[2rem] border border-[#EAE6DF] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col group relative">
              <div className="relative h-64 overflow-hidden bg-white">
                <img src="/produto-1.png" alt="1 Unidade Amazolé" className="w-full h-full object-cover mix-blend-multiply transform group-hover:scale-105 transition-transform duration-700 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
              </div>
              
              <div className="p-8 pt-0 flex-1 flex flex-col relative z-10 -mt-10">
                <div className="text-center mb-6">
                  <h3 className="font-serif text-3xl text-[#2C362B] mb-1">1 Unidade</h3>
                  <p className="text-[#8B8D88] text-[10px] font-bold uppercase tracking-[0.2em]">Tratamento Inicial</p>
                </div>
                <div className="text-center mb-6 bg-[#FDFBF7] py-4 rounded-2xl border border-[#EAE6DF]/50">
                  <span className="block text-[#A9ACA6] text-xs line-through mb-1 font-light">De R$ 147,00</span>
                  <div className="font-serif text-5xl text-[#2C362B] tracking-tight">R$ 97<span className="text-2xl">,90</span></div>
                </div>
                <ul className="space-y-4 mb-8 pt-4 flex-1">
                  <li className="flex items-start gap-3 text-sm text-[#4A4C48] font-light"><CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" /> <span>Clareamento visível nos <strong>primeiros dias</strong></span></li>
                  <li className="flex items-start gap-3 text-sm text-[#4A4C48] font-light"><CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" /> <span>Nutrição profunda (Rende 1 Mês)</span></li>
                  <li className="flex items-start gap-3 text-sm text-[#4A4C48] font-light"><CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" /> <span><strong>Pague apenas ao entregador</strong></span></li>
                </ul>
                <a href={link1Unidade} onClick={() => handleInitiateCheckout('1 Unidade Amazolé', 97.90)} className="w-full flex flex-col items-center justify-center gap-1 bg-[#FDFBF7] border border-[#EAE6DF] text-[#2C362B] hover:bg-[#2C362B] hover:text-white hover:border-[#2C362B] py-4 rounded-2xl font-bold tracking-widest uppercase text-[11px] transition-all shadow-sm">
                  <span className="flex items-center gap-2">Pedir 1 Unidade <ChevronRight className="w-4 h-4" /></span>
                  <span className="text-[9px] opacity-70 normal-case font-medium">E pagar apenas na entrega</span>
                </a>
              </div>
            </div>

            {/* Kit Premium - Compre 2 Leve 3 */}
            <div className="w-full md:w-[420px] bg-[#2C362B] rounded-[2rem] relative shadow-[0_20px_50px_rgb(44,54,43,0.3)] transform md:scale-105 border border-[#D4A373]/40 overflow-hidden flex flex-col group">
              <div className="absolute top-0 left-0 right-0 bg-[#D4A373] text-[#2C362B] text-center py-2.5 font-black text-[10px] uppercase tracking-[0.2em] shadow-[0_10px_20px_rgba(0,0,0,0.2)] z-30">
                🏆 O Mais Vendido: Tratamento Completo
              </div>
              
              <div className="relative h-72 overflow-hidden mt-8">
                <img src="/produto-3.jpg" alt="3 Unidades Amazolé" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C362B] via-[#2C362B]/80 to-transparent"></div>
              </div>
              
              <div className="p-8 pt-0 flex-1 flex flex-col relative z-20 -mt-20">
                <div className="text-center mb-6">
                  <h3 className="font-serif text-4xl text-[#FDFBF7] mb-1">Compre 2, Leve 3</h3>
                  <p className="text-[#D4A373] text-[10px] font-bold uppercase tracking-[0.2em]">O Fim Definitivo das Manchas</p>
                </div>
                <div className="text-center mb-6 relative">
                  <div className="absolute -top-4 right-0 bg-red-500 text-white text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-lg transform rotate-6 animate-pulse">
                    🎁 Leve +1 de Graça
                  </div>
                  <span className="block text-white/40 text-sm line-through mb-1 font-light">De R$ 293,70</span>
                  <div className="font-serif text-6xl text-[#D4A373] tracking-tight">R$ 247</div>
                  <span className="block text-[#D4A373]/70 text-[10px] uppercase tracking-widest mt-2">Você economiza R$ 46,70</span>
                </div>
                <ul className="space-y-4 mb-8 pt-4 flex-1 border-t border-white/10">
                  <li className="flex items-start gap-3 text-sm text-[#EAE6DF] font-light"><CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" /> <span><strong>Remoção de manchas crônicas</strong></span></li>
                  <li className="flex items-start gap-3 text-sm text-[#EAE6DF] font-light"><CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" /> <span>Clareia axila, virilha e melasma</span></li>
                  <li className="flex items-start gap-3 text-sm text-[#EAE6DF] font-light"><CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" /> <span>Tratamento intensivo (Rende 3 Meses)</span></li>
                  <li className="flex items-start gap-3 text-sm text-[#EAE6DF] font-light"><CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" /> <span><strong>Pague apenas ao entregador</strong></span></li>
                </ul>
                <a href={link3Unidades} onClick={() => handleInitiateCheckout('Kit 3 Unidades Amazolé', 247.00)} className="w-full flex flex-col items-center justify-center gap-1 bg-[#D4A373] hover:bg-[#c09162] text-[#2C362B] py-5 rounded-2xl font-bold tracking-widest uppercase text-[12px] transition-all hover:scale-[1.02] shadow-[0_10px_30px_rgba(212,163,115,0.4)] relative overflow-hidden group/btn">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                  <span className="flex items-center gap-2 relative z-10">Agendar Minha Entrega <ChevronRight className="w-5 h-5" /></span>
                  <span className="text-[10px] opacity-80 normal-case font-medium relative z-10">Pague apenas quando receber o produto</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* FAQ - Perguntas Frequentes */}
      <section className="py-20 bg-[#FDFBF7] border-t border-[#EAE6DF]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#D4A373] mb-4">Tire suas dúvidas</h2>
            <h3 className="font-serif text-3xl md:text-5xl font-light text-[#2C362B]">Perguntas Frequentes</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#EAE6DF] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="flex items-start gap-3 font-bold text-[#2C362B] mb-3 leading-tight"><HelpCircle className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" /> Como funciona o Pagamento na Entrega?</h4>
              <p className="text-[#6B7068] text-sm font-light leading-relaxed pl-8">Você não precisa de cartão de crédito. Faça o pedido aqui no site e pague o valor apenas no momento em que o entregador chegar na sua casa com o produto em mãos.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-[#EAE6DF] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="flex items-start gap-3 font-bold text-[#2C362B] mb-3 leading-tight"><Shield className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" /> Tenho alguma garantia?</h4>
              <p className="text-[#6B7068] text-sm font-light leading-relaxed pl-8"><strong>Sim! O nosso Desafio de 30 Dias.</strong> Temos tanta confiança na nossa fórmula que o risco é todo nosso: se você usar o Amazolé por 30 dias contínuos e achar que suas manchas não clarearam absolutamente nada, nós devolvemos 100% do seu dinheiro. Sem perguntas.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-[#EAE6DF] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="flex items-start gap-3 font-bold text-[#2C362B] mb-3 leading-tight"><HelpCircle className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" /> Posso usar e tomar sol?</h4>
              <p className="text-[#6B7068] text-sm font-light leading-relaxed pl-8">Sim! Nossa fórmula é 100% natural e sem ácidos fortes que descamam a pele e causam efeito rebote. Pode usar de dia tranquilamente, mas recomendamos sempre associar ao uso de protetor solar para proteger a pele e potencializar o clareamento.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-[#EAE6DF] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="flex items-start gap-3 font-bold text-[#2C362B] mb-3 leading-tight"><HelpCircle className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" /> Onde posso aplicar?</h4>
              <p className="text-[#6B7068] text-sm font-light leading-relaxed pl-8">No rosto (melasma), axilas, pescoço, virilha, coxas e bumbum (para foliculite). Seguro até para as áreas mais sensíveis do corpo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimalista de Segurança */}
      <footer className="py-12 px-4 text-center bg-white border-t border-[#EAE6DF]">
        <div className="max-w-3xl mx-auto">
          <Lock className="w-8 h-8 text-[#D4A373] mx-auto mb-5 opacity-80" />
          <h3 className="text-lg font-serif text-[#2C362B] mb-3">Compra 100% Segura</h3>
          <p className="text-sm text-[#A9ACA6] font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Nós levamos a sua segurança a sério. Por isso, desenvolvemos o sistema de <strong>Pagamento na Entrega</strong>. Você não precisa expor seus dados bancários ou números de cartão de crédito na internet. Faça seu pedido em menos de 1 minuto, receba no conforto do seu lar e pague diretamente ao entregador. Risco zero para você.
          </p>
          <div className="text-[10px] text-[#A9ACA6] uppercase tracking-widest border-t border-[#EAE6DF] pt-8 font-medium">
            © {new Date().getFullYear()} Amazolé Clareador. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
