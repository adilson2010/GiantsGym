export default function AppDownload() {
  return (
    <section id="app" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[#FFB84D] to-[#FFA726]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-black/80 text-xs sm:text-sm font-bold tracking-[0.2em] mb-2 sm:mb-3">
            TREINE ONDE ESTIVER
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 px-4">
            Baixe Nosso App de Treino
          </h2>
          <p className="text-black/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Acesse seus treinos personalizados, acompanhe seu progresso e receba dicas exclusivas direto no seu celular
          </p>
        </div>

        {/* App Preview and Download Section */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* App Image */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-[40px] blur-3xl"></div>
              <img
                src="https://readdy.ai/api/search-image?query=modern%20fitness%20mobile%20app%20interface%20showing%20workout%20tracking%20features%20exercise%20routines%20and%20progress%20charts%20on%20smartphone%20screen%20with%20clean%20minimalist%20design%20orange%20accent%20colors%20professional%20product%20photography%20white%20background&width=400&height=800&seq=gym-app-mockup-001&orientation=portrait"
                alt="Giants Gym App"
                className="relative w-64 sm:w-80 h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Download Buttons and Features */}
          <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
            {/* Features List */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-calendar-check-line text-black text-xl sm:text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-black font-bold text-base sm:text-lg mb-1">Treinos Personalizados</h3>
                  <p className="text-black/80 text-xs sm:text-sm">Planos de treino adaptados aos seus objetivos</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-line-chart-line text-black text-xl sm:text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-black font-bold text-base sm:text-lg mb-1">Acompanhe seu Progresso</h3>
                  <p className="text-black/80 text-xs sm:text-sm">Veja sua evolução com gráficos e estatísticas</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-video-line text-black text-xl sm:text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-black font-bold text-base sm:text-lg mb-1">Vídeos Demonstrativos</h3>
                  <p className="text-black/80 text-xs sm:text-sm">Aprenda a executar cada exercício corretamente</p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-3 sm:space-y-4 pt-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 bg-black hover:bg-black/90 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 hover:shadow-2xl cursor-pointer group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <i className="ri-apple-fill text-3xl sm:text-4xl text-white"></i>
                </div>
                <div className="text-left flex-1">
                  <p className="text-xs text-white/70">Disponível na</p>
                  <p className="text-lg sm:text-xl font-bold text-white">App Store</p>
                </div>
                <i className="ri-arrow-right-line text-xl sm:text-2xl text-[#FFB84D] group-hover:translate-x-2 transition-transform duration-300"></i>
              </a>

              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 bg-black hover:bg-black/90 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 hover:shadow-2xl cursor-pointer group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <i className="ri-google-play-fill text-3xl sm:text-4xl text-white"></i>
                </div>
                <div className="text-left flex-1">
                  <p className="text-xs text-white/70">Disponível no</p>
                  <p className="text-lg sm:text-xl font-bold text-white">Google Play</p>
                </div>
                <i className="ri-arrow-right-line text-xl sm:text-2xl text-[#FFB84D] group-hover:translate-x-2 transition-transform duration-300"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
