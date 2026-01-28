export default function Hero() {
  const scrollToPlans = () => {
    const element = document.getElementById('plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.readdy.ai/image/2050551fbb19c229cf27f3c804633125/8dd90af33253a9a289c8b76bde867575.jpeg"
          alt="Giants Gym Interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full border-2 border-white/80 mb-6 sm:mb-8 backdrop-blur-sm">
          <i className="ri-map-pin-line text-white text-base sm:text-lg"></i>
          <span className="text-white font-medium text-sm sm:text-base">Portal da Primavera - Cotia/SP</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
          TRANSFORME SEU<br />CORPO E MENTE
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl text-white/90 font-light mb-2 sm:mb-4 max-w-3xl mx-auto px-4">
          <strong>Academia completa</strong> com <strong>equipamentos de última geração</strong> em <strong>Cotia</strong>
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-8 sm:mb-12 px-4">
          Planos a partir de R$ 109,90/mês
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 px-4">
          <button
            onClick={scrollToPlans}
            className="bg-[#FFB84D] text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#FFA726] transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full sm:w-auto whitespace-nowrap cursor-pointer"
          >
            Conheça os Planos
          </button>
          <button
            onClick={scrollToContact}
            className="border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto whitespace-nowrap cursor-pointer"
          >
            Agende uma Visita
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white/60 text-2xl sm:text-3xl"></i>
      </div>
    </section>
  );
}
