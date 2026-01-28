
export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#8B0000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img
              src="https://static.readdy.ai/image/2050551fbb19c229cf27f3c804633125/ab99d3e9cde5f21d44b78f8ef91d6084.png"
              alt="Giants Gym"
              className="h-16 sm:h-20 w-auto object-contain mb-3 sm:mb-4"
            />
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              <strong>Academia completa</strong> em <strong>Cotia</strong> com <strong>equipamentos de última geração</strong> para sua transformação.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Giants Gym Cotia</h3>
            <div className="space-y-3 sm:space-y-4">
              <p className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                <i className="ri-map-pin-line text-base sm:text-xl flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"></i>
                <span>Rua Bandeirantes, 200<br />Portal da Primavera<br />Cotia - SP</span>
              </p>
              <a
                href="mailto:cotia@giantsgym.com.br"
                className="flex items-center gap-2 sm:gap-3 hover:text-[#FFB84D] transition-colors duration-300 cursor-pointer text-sm sm:text-base break-all"
              >
                <i className="ri-mail-line text-base sm:text-xl w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0"></i>
                <span>cotia@giantsgym.com.br</span>
              </a>
              <a
                href="https://wa.me/5511933318000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 hover:text-[#FFB84D] transition-colors duration-300 cursor-pointer text-sm sm:text-base"
              >
                <i className="ri-whatsapp-line text-base sm:text-xl w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0"></i>
                <span>(11) 93331-8000</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Links Rápidos</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a href="#about" className="hover:text-[#FFB84D] transition-colors duration-300 cursor-pointer">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[#FFB84D] transition-colors duration-300 cursor-pointer">
                  Planos
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#FFB84D] transition-colors duration-300 cursor-pointer">
                  Localização
                </a>
              </li>
              <li>
                <a href="#app" className="hover:text-[#FFB84D] transition-colors duration-300 cursor-pointer">
                  App de Treino
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Redes Sociais</h3>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/giantsgym"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFB84D] hover:text-black transition-all duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-xl sm:text-2xl"></i>
              </a>
              <a
                href="https://www.facebook.com/giantsgym"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFB84D] hover:text-black transition-all duration-300 cursor-pointer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-xl sm:text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
          <p className="text-white/80 text-xs sm:text-sm">
            © 2025 Giants Gym Cotia. Todos os direitos reservados. | <a href="#" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-[#FFB84D] transition-colors duration-300 cursor-pointer">Website Oficial</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
