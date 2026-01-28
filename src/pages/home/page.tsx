import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import Location from './components/Location';
import AppDownload from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { SchemaOrg, organizationSchema, websiteSchema, faqSchema } from '../../utils/seo';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org Structured Data */}
      <SchemaOrg type="Organization" data={organizationSchema} />
      <SchemaOrg type="WebSite" data={websiteSchema} />
      <SchemaOrg type="FAQPage" data={faqSchema} />
      
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Plans />
      <Location />
      <AppDownload />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511933318000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-50 animate-pulse"
        aria-label="WhatsApp"
      >
        <i className="ri-whatsapp-line text-white text-2xl sm:text-3xl"></i>
      </a>
    </div>
  );
}
