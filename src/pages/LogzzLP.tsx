import { ArrowRight, ShieldCheck, Truck, Star, CheckCircle2 } from 'lucide-react';

export default function LogzzLP() {
  const logzzCheckoutUrl = "https://app.logzz.com.br/checkout/exemplo";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Bar (Scarcity) */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-bold animate-pulse">
        ⚠️ ATENÇÃO: Últimas unidades do Lote Promocional em estoque!
      </div>

      {/* Header */}
      <header className="bg-white border-b py-4 px-4 sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="font-black text-2xl text-amber-500 tracking-tighter">
            Curcuma<span className="text-slate-900">Pro</span>™
          </div>
          <div className="text-xs font-bold text-green-600 flex items-center gap-1 bg-green-50 px-3 py-1.5 rounded-full">
            <Truck className="w-4 h-4" /> Pagamento na Entrega
          </div>
        </div>
      </header>

      {/* Hero / VSL Section */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-slate-900">
            O Fim das <span className="text-red-600 underline decoration-red-200">Dores Articulares</span> em 7 Dias Usando o Poder da Cúrcuma em Gotas
          </h1>
          <p className="text-lg text-slate-600 mb-8 font-medium">
            Fórmula sublingual americana com absorção 10x mais rápida. Alívio imediato para joelhos, costas e mãos sem agredir o estômago.
          </p>
          
          {/* Fake Video Player (VSL) */}
          <div className="w-full aspect-video bg-slate-900 rounded-2xl mb-8 relative flex items-center justify-center overflow-hidden shadow-2xl border-4 border-slate-900">
            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black/30"></div>
            <button className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white z-10 hover:scale-110 transition-transform shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </button>
            <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded font-bold">
              🔊 Ligue o som
            </div>
          </div>

          <a href="#kits" className="inline-flex w-full md:w-auto items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-5 rounded-2xl font-black text-xl transition-all hover:-translate-y-1 shadow-[0_8px_30px_rgba(34,197,94,0.4)] animate-bounce">
            QUERO ALÍVIO AGORA <ArrowRight className="w-6 h-6" />
          </a>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500 font-bold">
            <ShieldCheck className="w-5 h-5 text-amber-500" />
            Compra 100% Segura - Só pague quando receber!
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-slate-50 px-4 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <div className="flex text-amber-400">
              <Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" />
            </div>
            <span className="font-bold text-slate-700">Recomendado por 14.500+ Brasileiros</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex gap-1 text-amber-400 mb-3"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
              <p className="text-slate-600 font-medium italic mb-4">"Eu não conseguia mais subir escadas por causa do joelho. Com 5 dias pingando essas gotas embaixo da língua a dor sumiu. O melhor é que o motoboy trouxe e eu só paguei na hora."</p>
              <div className="font-bold text-slate-900">- Dona Maria José, 64 anos</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex gap-1 text-amber-400 mb-3"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
              <p className="text-slate-600 font-medium italic mb-4">"Tentava tomar cápsulas mas atacava meu estômago. Esse em gotas é maravilhoso, aliviou a minha artrite nas mãos rápido demais."</p>
              <div className="font-bold text-slate-900">- Seu Antônio, 71 anos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Kits */}
      <section id="kits" className="py-16 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4 text-slate-900">Escolha o seu Tratamento</h2>
          <p className="text-center text-slate-500 font-medium mb-12">Quanto mais frascos, maior o seu desconto. Recomendamos o tratamento de 3 a 5 meses.</p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Kit 1 */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 relative flex flex-col hover:border-amber-400 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-700">1 Frasco</h3>
                <p className="text-sm text-slate-500">Para testar (1 Mês)</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-sm text-slate-400 line-through">De R$ 197</span>
                <div className="text-4xl font-black text-slate-900">R$ 147</div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Frete Fixo R$ 19,90</li>
                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Pague só na entrega</li>
              </ul>
              <a href={logzzCheckoutUrl} className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold transition-colors">
                Agendar Entrega
              </a>
            </div>

            {/* Kit 3 (Campeão) */}
            <div className="bg-amber-50 border-4 border-amber-400 rounded-3xl p-6 relative flex flex-col shadow-xl transform lg:-translate-y-4">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 px-6 py-1.5 rounded-full font-black text-sm whitespace-nowrap shadow-md">
                CAMPEÃO DE VENDAS
              </div>
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-black text-amber-700">3 Frascos</h3>
                <p className="text-sm font-bold text-amber-600/80">Tratamento 3 Meses</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-sm text-amber-600/60 font-bold line-through">De R$ 591</span>
                <div className="text-5xl font-black text-slate-900">R$ 297</div>
                <span className="text-sm font-bold text-green-600">Frete Grátis</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Frete Totalmente Grátis</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Tratamento Completo</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Pague só na entrega</li>
              </ul>
              <a href={logzzCheckoutUrl} className="w-full text-center bg-green-500 hover:bg-green-600 text-white py-5 rounded-xl font-black text-lg transition-all shadow-[0_8px_20px_rgba(34,197,94,0.3)] hover:-translate-y-1">
                Agendar Entrega (Mais Popular)
              </a>
            </div>

            {/* Kit 5 */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 relative flex flex-col hover:border-amber-400 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-700">5 Frascos</h3>
                <p className="text-sm text-slate-500">Renovação Celular (5 Meses)</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-sm text-slate-400 line-through">De R$ 985</span>
                <div className="text-4xl font-black text-slate-900">R$ 397</div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Frete Grátis Brasil</li>
                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Sai apenas R$ 79 por frasco</li>
                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Pague só na entrega</li>
              </ul>
              <a href={logzzCheckoutUrl} className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold transition-colors">
                Agendar Entrega Max
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="font-black text-xl text-amber-500 mb-4 opacity-50">CurcumaPro™</div>
          <p className="text-sm mb-4">Este produto não é um medicamento. Isento de registro conforme RDC 240/2018.</p>
          <div className="flex justify-center gap-4 text-xs">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
