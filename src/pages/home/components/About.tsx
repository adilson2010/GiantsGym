
export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-[#FFB84D] text-xs sm:text-sm font-bold tracking-[0.2em] mb-2 sm:mb-3">
            CONHEÇA A GIANTS GYM
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 px-4">
            Quem Somos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Mais do que uma <strong>academia em Cotia</strong>, somos uma comunidade dedicada a transformar vidas através do <strong>fortalecimento físico e espiritual</strong>
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* ÁGUIA - Visão e Força */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500 shadow-xl">
            <div className="absolute inset-0 z-0">
              <img
                src="https://readdy.ai/api/search-image?query=majestic%20golden%20eagle%20soaring%20with%20powerful%20wings%20spread%20against%20dramatic%20fiery%20orange%20and%20gold%20sparks%20background%20intense%20powerful%20spiritual%20strength%20divine%20vision%20biblical%20symbolism%20cinematic%20lighting%20epic%20atmosphere&width=800&height=1000&seq=aguia-visao-forca-001&orientation=portrait"
                alt="Águia - Visão e Força"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
            </div>

            <div className="relative z-10 p-6 sm:p-8 md:p-12 h-full flex flex-col justify-between min-h-[500px] sm:min-h-[600px]">
              {/* Title */}
              <div>
                <h4 id="aguia-visao-forca">
                  <a href="#aguia-visao-forca" className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFB84D] mb-2 sm:mb-3 tracking-wide block">
                    ÁGUIA
                  </a>
                </h4>
                <p className="text-xl sm:text-2xl text-white font-semibold mb-6 sm:mb-8">
                  VISÃO E FORÇA
                </p>
              </div>

              {/* Content */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  <strong>Quem confia no Senhor aprende a enxergar além.</strong>
                </p>
                
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  A <strong className="text-[#FFB84D]">ÁGUIA</strong> nos lembra que a verdadeira força vem de Deus e que <strong>Ele nos capacita a subir mais alto.</strong>
                </p>

                <div className="pt-3 sm:pt-4 border-t border-white/30">
                  <p className="text-white/90 text-sm sm:text-base italic">
                    Isaías 40:31
                  </p>
                </div>
              </div>

              {/* Logo */}
              <div className="flex justify-center mt-6 sm:mt-8">
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                  <img
                    src="https://static.readdy.ai/image/2050551fbb19c229cf27f3c804633125/ab99d3e9cde5f21d44b78f8ef91d6084.png"
                    alt="Giants Gym Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* COROA - Valor e Honra */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500 shadow-xl">
            <div className="absolute inset-0 z-0">
              <img
                src="https://readdy.ai/api/search-image?query=majestic%20golden%20crown%20with%20royal%20shield%20emblem%20eagle%20symbol%20glowing%20orange%20and%20gold%20sparks%20dramatic%20lighting%20divine%20honor%20spiritual%20value%20biblical%20symbolism%20cinematic%20atmosphere%20epic%20background&width=800&height=1000&seq=coroa-valor-honra-001&orientation=portrait"
                alt="Coroa - Valor e Honra"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
            </div>

            <div className="relative z-10 p-6 sm:p-8 md:p-12 h-full flex flex-col justify-between min-h-[500px] sm:min-h-[600px]">
              {/* Title */}
              <div>
                <h4 id="coroa-valor-honra">
                  <a href="#coroa-valor-honra" className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFB84D] mb-2 sm:mb-3 tracking-wide block">
                    COROA
                  </a>
                </h4>
                <p className="text-xl sm:text-2xl text-white font-semibold mb-6 sm:mb-8">
                  VALOR E HONRA
                </p>
              </div>

              {/* Content */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  <strong>Cada pessoa carrega um valor dado por Deus.</strong>
                </p>
                
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  A <strong className="text-[#FFB84D]">COROA</strong> representa honra, identidade e propósito.
                </p>

                <div className="pt-3 sm:pt-4 border-t border-white/30">
                  <p className="text-white/90 text-sm sm:text-base">
                    Reconhecemos que cada conquista é um reflexo do valor que Deus nos deu
                  </p>
                </div>
              </div>

              {/* Logo */}
              <div className="flex justify-center mt-6 sm:mt-8">
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                  <img
                    src="https://static.readdy.ai/image/2050551fbb19c229cf27f3c804633125/ab99d3e9cde5f21d44b78f8ef91d6084.png"
                    alt="Giants Gym Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-[#FFB84D] to-[#FFA726] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h4 id="nossa-missao">
              <a href="#nossa-missao" className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 block">
                Nossa Missão
              </a>
            </h4>
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
              Capacitar cada pessoa a alcançar seu <strong>máximo potencial físico e espiritual</strong>, 
              oferecendo um ambiente de excelência onde <strong>força, disciplina e fé</strong> se encontram. 
              Acreditamos que através do <strong>fortalecimento do corpo</strong>, fortalecemos também a mente e o espírito.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-[#F8F6F3] hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FFB84D] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <i className="ri-eye-line text-black text-2xl sm:text-3xl"></i>
            </div>
            <h4 id="visao-valor">
              <a href="#visao-valor" className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 block">
                Visão
              </a>
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Enxergar além das limitações, capacitados por uma força maior que nos eleva a novos patamares
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-[#F8F6F3] hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FFB84D] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <i className="ri-shield-star-line text-black text-2xl sm:text-3xl"></i>
            </div>
            <h4 id="valor-core">
              <a href="#valor-core" className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 block">
                Valor
              </a>
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Reconhecer o valor único de cada pessoa e honrar o potencial divino que existe em todos nós
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-[#F8F6F3] hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FFB84D] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <i className="ri-trophy-line text-black text-2xl sm:text-3xl"></i>
            </div>
            <h4 id="excelencia">
              <a href="#excelencia" className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 block">
                Excelência
              </a>
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Buscar constantemente a superação, com disciplina, dedicação e fé em cada treino
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
