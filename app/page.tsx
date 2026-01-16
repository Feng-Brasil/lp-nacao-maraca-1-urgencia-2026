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
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
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

      {/* Prioridade Máxima Section (Substituindo Benefícios) */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bebas mb-4 tracking-widest uppercase">
              Em 2026, a prioridade máxima no Nação são os que jogam sempre junto
            </h2>
            <div className="h-1 w-24 bg-[#c40000] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.mengo.com.br/prod/assets/images/2025/landing/exp-ingressos.png" 
                alt="Experiência Ingressos Nação" 
                className="w-full h-auto rounded-sm shadow-2xl border border-[#c40000]/20"
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
      <section id="planos" className="py-24 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#ffffff] rounded-sm overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
            <div className="bg-[#c40000] p-8 text-center">
              <h3 className="text-white text-4xl font-bebas tracking-widest uppercase">
                NAÇÃO MARACA 1 - TEMPORADA 2026
              </h3>
              <p className="text-white/90 mt-2 font-bold uppercase text-sm tracking-widest">O plano definitivo para quem vive o Flamengo</p>
            </div>
            
            <div className="p-10 text-[#000000]">
              <div className="flex justify-center items-baseline mb-10">
                <span className="text-2xl font-bold mr-1">R$</span>
                <span className="text-8xl font-bebas tracking-tighter">189</span>
                <span className="text-xl font-bold text-gray-500 ml-2">/mês</span>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 font-bold border-b border-gray-100 pb-3">
                  <span className="text-[#c40000]">✓</span> PRIORIDADE 1 (NÍVEL 0) NA COMPRA DE INGRESSOS
                </li>
                <li className="flex items-center gap-3 font-bold border-b border-gray-100 pb-3">
                  <span className="text-[#c40000]">✓</span> 100% DE DESCONTO NO INGRESSO (SETOR NORTE/SUL)
                </li>
                <li className="flex items-center gap-3 font-bold border-b border-gray-100 pb-3">
                  <span className="text-[#c40000]">✓</span> DIREITO A 3 CONVIDADOS COM 50% DE DESCONTO
                </li>
                <li className="flex items-center gap-3 font-bold border-b border-gray-100 pb-3">
                  <span className="text-[#c40000]">✓</span> KIT BOAS-VINDAS "LENDAS DO MARACA" EXCLUSIVO
                </li>
                <li className="flex items-center gap-3 font-bold">
                  <span className="text-[#c40000]">✓</span> PARTICIPAÇÃO EM SORTEIOS PARA EXPERIÊNCIAS NO GRAMADO
                </li>
              </ul>

              <a 
                href="https://nacao.flamengo.com.br/checkout/cart/subscribe/1c9b172de533f5422fd04b7eaa056ecc" 
                className="block w-full bg-[#000000] text-white py-5 rounded-sm font-bebas text-3xl tracking-widest hover:bg-[#c40000] transition-colors shadow-lg text-center"
              >
                QUERO MINHA VAGA EM 2026!
              </a>
              
              <p className="text-center mt-6 text-sm text-gray-500 font-bold uppercase tracking-widest">
                ⏳ Oferta expira em 28 de fevereiro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] py-16 border-t border-[#c40000]/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <img 
                src="https://images.mengo.com.br/prod/assets/images/2025/logo-nacao.png" 
                alt="Logo Nação" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bebas tracking-widest uppercase">
                NAÇÃO <span className="text-[#c40000]">MARACA</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              O Maracanã é a nossa casa. A Nação é a nossa alma. Faça parte da história viva do futebol mundial.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-bold text-gray-400">
            <a href="#" className="hover:text-[#c40000] transition-colors uppercase tracking-widest">Termos</a>
            <a href="#" className="hover:text-[#c40000] transition-colors uppercase tracking-widest">Privacidade</a>
            <a href="#" className="hover:text-[#c40000] transition-colors uppercase tracking-widest">Contato</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-gray-600 uppercase tracking-widest font-bold">
              © 2024 Nação Maraca. Todos os direitos reservados. <br />
              Desenvolvido para amantes do Templo.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}