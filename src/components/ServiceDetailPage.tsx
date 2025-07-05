import React, { useState, useEffect } from 'react';
import { Stars, X, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import CosmicBackground from './CosmicBackground';
import Footer from './Footer';

type TranslatableString = {
  en: string;
  hi: string;
};

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: TranslatableString;
  description: TranslatableString;
  fullDescription: TranslatableString;
  benefits: TranslatableString[];
  color: string;
  photos: string[];
}

interface ServiceDetailPageProps {
  service: Service;
  onNavigate: (page: string) => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onNavigate }) => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (page: string) => {
    closeMobileMenu();
    onNavigate(page);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CosmicBackground />
      
      {/* Mobile/Desktop Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/15 backdrop-blur-md border border-white/30 rounded-full mx-4 mt-4 shadow-2xl">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Mobile Layout */}
          {isMobile ? (
            <>
              {/* Make entire navbar clickable */}
              <button
                onClick={toggleMobileMenu}
                className="flex items-center justify-between w-full focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {/* Logo/Close Button - Left aligned */}
                <div className="flex items-center space-x-3 flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
                    {isMobileMenuOpen ? (
                      <X className="w-6 h-6 text-white transition-all duration-300" />
                    ) : (
                      <Stars className="w-6 h-6 text-white transition-all duration-300" />
                    )}
                  </div>
                </div>
                
                {/* Company Name - Center aligned */}
                <div className="flex-1 flex justify-center px-2">
                  <span className="text-white font-semibold text-sm md:text-base drop-shadow-lg whitespace-nowrap">
                    {currentLanguage === 'hi' ? 'माँ शारदा ज्योतिष केंद्र' : 'Maa Sharda Jyotish Kendra'}
                  </span>
                </div>
                
                {/* Empty space for balance - Right aligned */}
                <div className="flex-shrink-0 w-12"></div>
              </button>
            </>
          ) : (
            <>
              {/* Desktop Layout */}
              <button 
                onClick={() => onNavigate('home')}
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-800 rounded-full flex items-center justify-center shadow-lg">
                  <Stars className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold text-lg drop-shadow-lg">
                  {currentLanguage === 'hi' ? 'माँ शारदा ज्योतिष केंद्र' : 'Maa Sharda Jyotish Kendra'}
                </span>
              </button>
              
              <nav className="flex items-center space-x-8">
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  {t.header.home}
                </button>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  {t.header.about}
                </button>
                <button 
                  onClick={() => onNavigate('services-page')}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  {t.header.services}
                </button>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  {t.header.contact}
                </button>
              </nav>
              
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg font-semibold">
                {t.header.bookNow}
              </button>
            </>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <>
          {/* Backdrop with blur and dim effect */}
          <div
            className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? 'backdrop-blur-sm bg-black/60 opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
            onClick={closeMobileMenu}
          />

          {/* Slide-in Menu Panel */}
          <div
            className={`fixed top-0 right-0 h-full w-1/2 bg-white/20 backdrop-blur-xl border-l border-white/30 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full pt-24 px-6">
              {/* Navigation Links */}
              <nav className="flex flex-col space-y-6 flex-grow">
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-white/90 hover:text-white text-left text-lg md:text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  {t.header.home}
                </button>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-white/90 hover:text-white text-left text-lg md:text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  {t.header.about}
                </button>
                <button
                  onClick={() => handleNavClick('services-page')}
                  className="text-white/90 hover:text-white text-left text-lg md:text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  {t.header.services}
                </button>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-white/90 hover:text-white text-left text-lg md:text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  {t.header.contact}
                </button>
              </nav>

              {/* Book Now Button at Bottom */}
              <div className="pb-8">
                <button
                  onClick={closeMobileMenu}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-4 md:px-6 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/30"
                >
                  {t.header.bookNow}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={() => onNavigate('services-page')}
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm md:text-base">{t.gallery.backToServices}</span>
          </button>

          {/* Service Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-6">
              {service.title[currentLanguage]}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto drop-shadow-lg">
              {service.description[currentLanguage]}
            </p>
          </div>

          {/* Service Details - Single Column Layout */}
          <div className="mb-20">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                {t.serviceDetail.detailedDescription}
              </h2>
              <p className="text-white/80 leading-relaxed text-base md:text-lg lg:text-xl">
                {service.fullDescription[currentLanguage]}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 border border-white/20 shadow-2xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                {t.serviceDetail.keyBenefits}
              </h2>
              <ul className="space-y-4">
                {service.benefits[currentLanguage].map((benefit, index) => (
                  <li key={index} className="group flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-white/80 text-base md:text-lg lg:text-xl group-hover:scale-105 transition-transform duration-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 drop-shadow-xl">
              {t.serviceDetail.photoGallery}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {service.photos.map((photo, index) => (
                <div
                  key={index}
                  className="group cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo}
                      alt={`${service.title[currentLanguage]} - Image ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-xl">
                {t.serviceDetail.readyToBegin}
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                {t.serviceDetail.contactDescription.replace('{serviceName}', service.title[currentLanguage].toLowerCase())}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={`bg-gradient-to-r ${service.color} hover:shadow-2xl text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl`}>
                  {t.header.bookNow}
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 border border-white/20">
                  {t.serviceDetail.call}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;