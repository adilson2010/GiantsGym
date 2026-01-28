import { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-32">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://static.readdy.ai/image/2050551fbb19c229cf27f3c804633125/ab99d3e9cde5f21d44b78f8ef91d6084.png"
              alt="Giants Gym"
              className="h-20 sm:h-32 w-auto object-contain cursor-pointer"
              onClick={() => scrollToSection('hero')}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className={`font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                isScrolled ? 'text-black hover:text-[#FFB84D]' : 'text-white hover:text-[#FFB84D]'
              }`}
            >
              Sobre Nós
            </a>
            <a
              href="#plans"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('plans');
              }}
              className={`font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                isScrolled ? 'text-black hover:text-[#FFB84D]' : 'text-white hover:text-[#FFB84D]'
              }`}
            >
              Planos
            </a>
            <a
              href="#location"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('location');
              }}
              className={`font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                isScrolled ? 'text-black hover:text-[#FFB84D]' : 'text-white hover:text-[#FFB84D]'
              }`}
            >
              Localização
            </a>
            <a
              href="#app"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('app');
              }}
              className={`font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                isScrolled ? 'text-black hover:text-[#FFB84D]' : 'text-white hover:text-[#FFB84D]'
              }`}
            >
              App
            </a>
            <a
              href="https://wa.me/5511933318000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFB84D] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#FFA726] transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <i className="ri-close-line text-2xl"></i>
            ) : (
              <i className="ri-menu-line text-2xl"></i>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="block py-3 px-4 text-black hover:bg-[#FFB84D]/10 hover:text-[#FFB84D] rounded-lg transition-colors duration-300 cursor-pointer font-medium"
              >
                Sobre Nós
              </a>
              <a
                href="#plans"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('plans');
                }}
                className="block py-3 px-4 text-black hover:bg-[#FFB84D]/10 hover:text-[#FFB84D] rounded-lg transition-colors duration-300 cursor-pointer font-medium"
              >
                Planos
              </a>
              <a
                href="#location"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('location');
                }}
                className="block py-3 px-4 text-black hover:bg-[#FFB84D]/10 hover:text-[#FFB84D] rounded-lg transition-colors duration-300 cursor-pointer font-medium"
              >
                Localização
              </a>
              <a
                href="#app"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('app');
                }}
                className="block py-3 px-4 text-black hover:bg-[#FFB84D]/10 hover:text-[#FFB84D] rounded-lg transition-colors duration-300 cursor-pointer font-medium"
              >
                App
              </a>
              <a
                href="https://wa.me/5511933318000"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 px-4 bg-[#FFB84D] text-black text-center rounded-lg font-semibold hover:bg-[#FFA726] transition-all duration-300 cursor-pointer"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
