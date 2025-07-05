import React, { useState, useEffect } from 'react';
import { Stars, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { currentLanguage, toggleLanguage } = useLanguage();
  const t = translations[currentLanguage];

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

  const handleNavClick = (href: string, page?: string) => {
    closeMobileMenu();
    
    if (page) {
      // Navigate to different page
      onNavigate(page);
    } else {
      // Scroll to section on current page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleServicesClick = () => {
    closeMobileMenu();
    onNavigate('services-page');
  };

  const handleGalleryClick = () => {
    closeMobileMenu();
    onNavigate('gallery-page');
  };

  return (
    <>
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
                  <span className="text-white font-semibold text-base drop-shadow-lg whitespace-nowrap">
                    {currentLanguage === 'hi' ? 'माँ शारदा ज्योतिष केंद्र' : 'Maa Sharda Jyotish Kendra'}
                  </span>
                </div>
                
                {/* Language Toggle - Right aligned */}
                <div className="flex-shrink-0 w-12 flex justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLanguage();
                    }}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
                  >
                    <Globe className="w-4 h-4" />
                  </button>
                </div>
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
                  onClick={() => handleNavClick('#home')}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  {t.header.home}
                </button>
                <button 
                  onClick={() => handleNavClick('#about')}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  {t.header.about}
                </button>
                <button 
                  onClick={handleServicesClick}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  {t.header.services}
                </button>
                <button 
                  onClick={handleGalleryClick}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  {t.header.gallery}
                </button>
              </nav>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/30 border border-white/30"
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLanguage === 'en' ? 'हिंदी' : 'English'}</span>
                </button>
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg font-semibold">
                  {t.header.bookNow}
                </button>
              </div>
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
                  onClick={() => handleNavClick('#home')}
                  className="text-white/90 hover:text-white text-left text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  {t.header.home}
                </button>
                <button
                  onClick={() => handleNavClick('#about')}
                  className="text-white/90 hover:text-white text-left text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  {t.header.about}
                </button>
                <button
                  onClick={handleServicesClick}
                  className="text-white/90 hover:text-white text-left text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  {t.header.services}
                </button>
                <button
                  onClick={handleGalleryClick}
                  className="text-white/90 hover:text-white text-left text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  {t.header.gallery}
                </button>
                <button
                  onClick={() => handleNavClick('#pricing')}
                  className="text-white/90 hover:text-white text-left text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  Pricing
                </button>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="text-white/90 hover:text-white text-left text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  {t.header.contact}
                </button>
              </nav>

              {/* Book Now Button at Bottom */}
              <div className="pb-8 space-y-4">
                <button
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:bg-white/30 border border-white/30"
                >
                  <Globe className="w-5 h-5" />
                  <span>{currentLanguage === 'en' ? 'हिंदी' : 'English'}</span>
                </button>
                <button
                  onClick={closeMobileMenu}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/30"
                >
                  {t.header.bookNow}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;