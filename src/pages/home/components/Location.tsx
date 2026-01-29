export default function Location() {
  return (
    <section id="location" className="py-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Map Column */}
          <div className="h-[400px] sm:h-[500px] md:h-[600px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890!2d-46.9234567!3d-23.6034567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM2JzEyLjQiUyA0NsKwNTUnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr&q=Rua+Bandeirantes,+122+-+Portal+da+Primavera,+Cotia+-+SP,+06716-640"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Giants Gym"
              className="md:rounded-l-3xl"
            ></iframe>
          </div>

          {/* Information Column */}
          <div id="hours" className="bg-black text-white p-6 sm:p-10 md:p-16 md:rounded-r-3xl flex flex-col justify-center">
            {/* Address Block */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <i className="ri-map-pin-line text-[#FFB84D] text-2xl sm:text-3xl md:text-4xl w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center"></i>
                <h4 id="localizacao">
                  <a href="#localizacao" className="text-[#FFB84D] text-xs font-bold tracking-[0.2em]">
                    NOSSA LOCALIZAÇÃO
                  </a>
                </h4>
              </div>
              <address className="not-italic text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
                <strong>Rua Bandeirantes, 200</strong><br />
                <strong>Portal da Primavera</strong><br />
                CEP 06716-640 – <strong>Cotia</strong> – SP
              </address>
            </div>

            {/* Hours Block */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <i className="ri-time-line text-[#FFB84D] text-2xl sm:text-3xl md:text-4xl w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center"></i>
                <h4 id="horario-funcionamento">
                  <a href="#horario-funcionamento" className="text-[#FFB84D] text-xs font-bold tracking-[0.2em]">
                    HORÁRIO DE FUNCIONAMENTO
                  </a>
                </h4>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-white/90">
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-[#FFB84D] rounded-full flex-shrink-0"></span>
                  <span><strong>Seg a Qui:</strong> 05:00 às 23h</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-[#FFB84D] rounded-full flex-shrink-0"></span>
                  <span><strong>Sexta:</strong> 05:00 às 22h</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-[#FFB84D] rounded-full flex-shrink-0"></span>
                  <span><strong>Sábado:</strong> 08h às 17h</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 bg-[#FFB84D] rounded-full flex-shrink-0"></span>
                  <span><strong>Dom/Feriados:</strong> 09h às 14h</span>
                </li>
              </ul>
            </div>

            {/* Contact Block */}
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <i className="ri-phone-line text-[#FFB84D] text-2xl sm:text-3xl md:text-4xl w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center"></i>
                <h4 id="fale-conosco">
                  <a href="#fale-conosco" className="text-[#FFB84D] text-xs font-bold tracking-[0.2em]">
                    FALE CONOSCO
                  </a>
                </h4>
              </div>
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <a
                  href="mailto:cotia@giantsgym.com.br"
                  className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-white/90 hover:text-[#FFB84D] transition-colors duration-300 cursor-pointer break-all"
                >
                  <i className="ri-mail-line text-lg sm:text-xl w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0"></i>
                  <span>cotia@giantsgym.com.br</span>
                </a>
                <a
                  href="https://wa.me/5511933318000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-white/90 hover:text-[#FFB84D] transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-whatsapp-line text-lg sm:text-xl w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0"></i>
                  <span>(11) 93331-8000</span>
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block w-full bg-[#FFB84D] text-black py-3 sm:py-4 rounded-full text-center text-sm sm:text-base font-semibold hover:bg-[#FFA726] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Enviar Mensagem
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
