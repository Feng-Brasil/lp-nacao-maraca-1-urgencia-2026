export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#ffffff] font-sans selection:bg-[#c40000] selection:text-white">
      {/* Import Bebas Neue via Google Fonts */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
      `}} />

      {/* Header / Navigation */}
      <nav className="fixed w-full z-50 bg-[#000000]/95 backdrop-blur-md border-b border-[#c40000]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://images.mengo.com.br/prod/assets/images/2025/logo-nacao.png" 
              alt="Logo Nação" 
              className="h-12 w-auto"
            />
          </div>
          <a 
            href="https://nacao.flamengo.com.br/checkout/cart/subscribe/1c9b172de533f5422fd04b7eaa056ecc" 
            className="bg-[#c40000] text-white px-6 py-2 rounded-sm font-bebas text-lg tracking-widest hover:bg-white hover:text-[#c40000] transition-all duration-300"
          >
            ASSINE AGORA
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-48 md:pb-16 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Image - Torcida do Flamengo no Maracanã */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1624361514002-998897950361?q=80&w=2070&auto=format&fit=crop" 
            alt="Torcida do Flamengo no Maracanã"
            className="w-full h-full object-cover grayscale-[0.5] brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-[#c40000]/30"></div>
          <div className="absolute inset-0 bg-[#c40000]/10 mix-blend-multiply"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-bebas leading-[0.95] mb-6 uppercase tracking-tight">
              FECHADO COM O NAÇÃO <br />
              <span className="text-[#c40000]">DESDE O INÍCIO DA TEMPORADA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl">
              Em 2026, as adesões ao <span className="text-white font-bold underline decoration-[#c40000]">Nação Maraca 1</span> estarão abertas apenas até 28/2. A hora é agora!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://nacao.flamengo.com.br/checkout/cart/subscribe/1c9b172de533f5422fd04b7eaa056ecc" 
                className="bg-[#c40000] text-white text-center px-10 py-4 rounded-sm font-bebas text-2xl tracking-widest hover:bg-white hover:text-[#c40000] transition-all transform hover:scale-105 active:scale-95"
              >
                SEJA NAÇÃO MARACA 1 AGORA!
              </a>
              <div className="flex items-center gap-3 px-4 py-2 border border-white/20 rounded-sm bg-black/40 backdrop-blur-sm">
                <span className="text-[#c40000] text-2xl animate-pulse">●</span>
                <span className="text-sm font-medium uppercase tracking-tighter">Vagas limitadas para 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prioridade Máxima Section */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bebas mb-4 tracking-widest uppercase">
              Em 2026, a prioridade máxima no Nação são os que jogam sempre junto
            </h2>
            <div className="h-1 w-24 bg-[#c40000] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <img 
                src="https://images.mengo.com.br/prod/assets/images/2025/landing/scroll-flavaloriza-bh.png" 
                alt="Experiência Ingressos Nação" 
                className="max-w-full h-auto rounded-sm shadow-2xl border border-[#c40000]/20"
              />
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                Fazer parte do <span className="text-white font-bold">Nação Maraca 1</span> é privilégio reservado para aqueles que estão com o Flamengo em toda temporada. E quem está neste plano tem a compra do ingresso garantida nos momentos decisivos.
              </p>
              <a 
                href="https://nacao.flamengo.com.br/checkout/cart/subscribe/1c9b172de533f5422fd04b7eaa056ecc" 
                className="inline-block bg-[#c40000] text-white px-10 py-4 rounded-sm font-bebas text-2xl tracking-widest hover:bg-white hover:text-[#c40000] transition-all transform hover:scale-105"
              >
                Seja Nação Maraca 1 agora!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detalhes do Plano */}
      <section id="planos" className="py-12 md:py-24 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#ffffff] rounded-sm overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
            <div className="bg-[#c40000] p-8 text-center">
              <h3 className="text-white text-4xl font-bebas tracking-widest uppercase">
                NAÇÃO MARACA 1 - TEMPORADA 2026
              </h3>
            </div>
            
            <div className="p-10 text-[#000000]">
              <div className="flex justify-center items-baseline mb-10">
                <span className="text-lg md:text-xl font-bold mr-1">R$</span>
                <span className="text-5xl md:text-6xl font-bebas tracking-tighter">325,40</span>
                <span className="text-base md:text-lg font-bold text-gray-500 ml-2">/mês</span>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3 border-b border-gray-100 pb-3">
                  <span className="text-[#c40000] mt-1">✓</span> 
                  <span>Prioridade 1 na compra de ingressos para jogos no Maracanã como mandante e como visitante</span>
                </li>
                <li className="flex items-start gap-3 border-b border-gray-100 pb-3">
                  <span className="text-[#c40000] mt-1">✓</span> 
                  <span>75% de desconto no valor da inteira</span>
                </li>
                <li className="flex items-start gap-3 border-b border-gray-100 pb-3">
                  <span className="text-[#c40000] mt-1">✓</span> 
                  <span>Plano limitado a 10.000 titulares, com garantia de compra de ingressos para o Maracanã em sua onda de prioridade</span>
                </li>
                <li className="flex items-start gap-3 border-b border-gray-100 pb-3">
                  <span className="text-[#c40000] mt-1">✓</span> 
                  <span>Direito de contratação de até 3 convidados por R$50,00/mês cada, com compra na mesma prioridade do titular</span>
                </li>
                <li className="flex items-start gap-3 border-b border-gray-100 pb-3">
                  <span className="text-[#c40000] mt-1">✓</span> 
                  <span>Rating que valoriza o tempo de permanência</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c40000] mt-1">✓</span> 
                  <span>Direito a compra do Pacote Maracanã anual</span>
                </li>
              </ul>

              <a 
                href="https://nacao.flamengo.com.br/checkout/cart/subscribe/1c9b172de533f5422fd04b7eaa056ecc" 
                className="block w-full bg-[#000000] text-white py-5 rounded-sm font-bebas text-3xl tracking-widest hover:bg-[#c40000] transition-colors shadow-lg text-center"
              >
                QUERO MINHA VAGA EM 2026!
              </a>
              
              <p className="text-center mt-6 text-sm text-gray-500 font-bold uppercase tracking-widest">
                ⏳ Adesões abertas até 28 de fevereiro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimalista (Nação Maraca) */}
      <footer className="bg-[#000000] py-12 border-t border-[#c40000]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://images.mengo.com.br/prod/assets/images/2025/logo-nacao.png" 
              alt="Logo Nação" 
              className="w-auto mb-8"
            />
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-sm font-medium uppercase tracking-widest text-gray-400">
              <a href="https://nacao.flamengo.com.br/faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
              <a href="https://nacao.flamengo.com.br/fale-conosco" className="hover:text-white transition-colors">Fale Conosco</a>
              <a href="https://nacao.flamengo.com.br/termos-e-condicoes" className="hover:text-white transition-colors">Termos e Condições</a>
              <a href="https://nacao.flamengo.com.br/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 pt-8 border-t border-white/5 w-full justify-center">
              <img 
                src="https://images.mengo.com.br/prod/assets/images/shield-mark.png" 
                alt="CRF" 
                className="h-12 w-auto opacity-40" 
              />
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] leading-relaxed max-w-xs md:text-left">
                © 2026 CLUBE DE REGATAS DO FLAMENGO.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}