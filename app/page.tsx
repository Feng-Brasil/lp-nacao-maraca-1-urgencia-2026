export default function Home() {
  return (
    <main className="min-h-screen bg-[#171717] text-[#ffffff] font-sans selection:bg-[#2857b2] selection:text-white">
      {/* Header / Navigation */}
      <nav className="fixed w-full z-50 bg-[#040f24]/90 backdrop-blur-md border-b border-[#2857b2]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter uppercase italic" style={{ fontFamily: 'system-ui, "Big Shoulders Display"' }}>
              NAÇÃO <span className="text-[#2857b2]">MARACA</span>
            </span>
          </div>
          <a 
            href="#planos" 
            className="hidden md:block bg-[#ffffff] text-[#212121] px-6 py-2 rounded-full font-bold text-sm hover:bg-[#2857b2] hover:text-white transition-all duration-300"
          >
            ASSINE AGORA
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-[#040f24]"></div>
          <div className="absolute inset-0 bg-[#2857b2]/10 mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#2857b2] text-white px-4 py-1 rounded-sm mb-6 text-sm font-bold tracking-widest uppercase">
              ⚠️ URGÊNCIA TEMPORADA 2026
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-none mb-6 italic uppercase" style={{ fontFamily: 'system-ui, "Big Shoulders Display"' }}>
              O TEMPLO TE <br />
              <span className="text-[#2857b2]">CONVOCA.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
              A história não espera. Garanta sua prioridade máxima no Maracanã para 2026. 
              O prazo final para o plano <span className="text-white font-bold underline decoration-[#2857b2]">Nação Maraca 1</span> se encerra em 28 de fevereiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#planos" 
                className="bg-[#ffffff] text-[#212121] text-center px-8 py-4 rounded-md font-black text-lg hover:bg-[#2857b2] hover:text-white transition-all transform hover:scale-105 active:scale-95"
              >
                SEJA NAÇÃO MARACA 1 AGORA!
              </a>
              <div className="flex items-center gap-3 px-4 py-2 border border-white/10 rounded-md bg-white/5">
                <span className="text-[#2857b2] text-2xl animate-pulse">●</span>
                <span className="text-sm font-medium">Vagas limitadas para 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 bg-[#040f24]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight">VANTAGENS LENDÁRIAS</h2>
            <div className="h-1 w-24 bg-[#2857b2] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#171717] border border-[#2857b2]/20 rounded-xl hover:border-[#2857b2] transition-colors group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">🎟️</div>
              <h3 className="text-xl font-bold mb-4 uppercase text-[#2857b2]">Prioridade 0 (Máxima)</h3>
              <p className="text-gray-400 leading-relaxed">
                Seja o primeiro da fila. Ingressos garantidos antes de qualquer outro plano para todas as competições no Maracanã.
              </p>
            </div>

            <div className="p-8 bg-[#171717] border border-[#2857b2]/20 rounded-xl hover:border-[#2857b2] transition-colors group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">🏟️</div>
              <h3 className="text-xl font-bold mb-4 uppercase text-[#2857b2]">Experiência no Templo</h3>
              <p className="text-gray-400 leading-relaxed">
                Acesso exclusivo a áreas premium e tours históricos no estádio mais icônico do planeta. Sinta a lenda de perto.
              </p>
            </div>

            <div className="p-8 bg-[#171717] border border-[#2857b2]/20 rounded-xl hover:border-[#2857b2] transition-colors group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">💎</div>
              <h3 className="text-xl font-bold mb-4 uppercase text-[#2857b2]">Manto e Cashback</h3>
              <p className="text-gray-400 leading-relaxed">
                Descontos agressivos em lojas oficiais e cashback em parceiros que transformam sua mensalidade em investimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detalhes do Plano */}
      <section id="planos" className="py-24 bg-[#171717]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
            <div className="bg-[#2857b2] p-8 text-center">
              <h3 className="text-white text-3xl font-black uppercase italic" style={{ fontFamily: 'system-ui, "Big Shoulders Display"' }}>
                NAÇÃO MARACA 1 - TEMPORADA 2026
              </h3>
              <p className="text-white/80 mt-2 font-medium">O plano definitivo para quem vive o Flamengo</p>
            </div>
            
            <div className="p-10 text-[#212121]">
              <div className="flex justify-center items-baseline mb-10">
                <span className="text-2xl font-bold mr-1">R$</span>
                <span className="text-7xl font-black tracking-tighter">189</span>
                <span className="text-xl font-bold text-gray-500 ml-2">/mês</span>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 font-medium border-b border-gray-100 pb-3">
                  <span className="text-[#2857b2] font-bold">✓</span> Prioridade 1 (Nível 0) na compra de ingressos
                </li>
                <li className="flex items-center gap-3 font-medium border-b border-gray-100 pb-3">
                  <span className="text-[#2857b2] font-bold">✓</span> 100% de desconto no ingresso (Setor Norte/Sul)
                </li>
                <li className="flex items-center gap-3 font-medium border-b border-gray-100 pb-3">
                  <span className="text-[#2857b2] font-bold">✓</span> Direito a 3 convidados com 50% de desconto
                </li>
                <li className="flex items-center gap-3 font-medium border-b border-gray-100 pb-3">
                  <span className="text-[#2857b2] font-bold">✓</span> Kit Boas-Vindas "Lendas do Maraca" exclusivo
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <span className="text-[#2857b2] font-bold">✓</span> Participação em sorteios para experiências no gramado
                </li>
              </ul>

              <form action="#">
                <button className="w-full bg-[#2857b2] text-white py-5 rounded-xl font-black text-xl hover:bg-[#040f24] transition-colors shadow-lg shadow-[#2857b2]/20">
                  QUERO MINHA VAGA EM 2026!
                </button>
              </form>
              
              <p className="text-center mt-6 text-sm text-gray-500 font-bold uppercase tracking-widest">
                ⏳ Oferta expira em 28 de fevereiro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#040f24] py-16 border-t border-[#2857b2]/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black tracking-tighter uppercase italic mb-2">
              NAÇÃO <span className="text-[#2857b2]">MARACA</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              O Maracanã é a nossa casa. A Nação é a nossa alma. Faça parte da história viva do futebol mundial.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-bold text-gray-400">
            <a href="#" className="hover:text-[#2857b2] transition-colors">TERMOS</a>
            <a href="#" className="hover:text-[#2857b2] transition-colors">PRIVACIDADE</a>
            <a href="#" className="hover:text-[#2857b2] transition-colors">CONTATO</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-gray-600">
              © 2024 Nação Maraca. Todos os direitos reservados. <br />
              Desenvolvido para amantes do Templo.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}