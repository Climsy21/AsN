import React, { useState, useEffect } from 'react';
import { Stars, X } from 'lucide-react';
import { services } from '../data/servicesData';
import CosmicBackground from './CosmicBackground';
import Footer from './Footer';

interface ServicesPageProps {
  services: any[];
  onNavigate: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
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

  const handleLearnMore = (service: any) => {
    const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-');
    onNavigate(`service-detail-${serviceSlug}`);
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
                  <span className="text-white font-semibold text-base drop-shadow-lg whitespace-nowrap">
                    Maa Sharda Jyotish Kendra
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
                <span className="text-white font-semibold text-lg drop-shadow-lg">Maa Sharda Jyotish Kendra</span>
              </button>
              
              <nav className="flex items-center space-x-8">
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  Home
                </button>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  About
                </button>
                <span className="text-white font-semibold drop-shadow-lg">Services</span>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  Contact
                </button>
              </nav>
              
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg font-semibold">
                Book Now
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
                  className="text-white/90 hover:text-white text-left text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-white/90 hover:text-white text-left text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  About
                </button>
                <span className="text-white text-left text-xl font-semibold drop-shadow-lg py-3 border-b border-white/20">
                  Services
                </span>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-white/90 hover:text-white text-left text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  Contact
                </button>
              </nav>

              {/* Book Now Button at Bottom */}
              <div className="pb-8">
                <button
                  onClick={closeMobileMenu}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/30"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Header */}
      <section className="relative z-10 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold text-white drop-shadow-2xl mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/80 drop-shadow-lg">
              Comprehensive spiritual solutions for all aspects of life
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <main className="relative z-10 px-4 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] shadow-2xl overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Service Header */}
                <div className="p-4 md:p-8 border-b border-white/10">
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.color} rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 drop-shadow-lg">
                        {service.title}
                      </h2>
                      <p className="text-white/80 text-sm md:text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-4 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Left Column - Benefits */}
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3 drop-shadow-lg">
                          Key Benefits
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit: string, benefitIndex: number) => (
                            <li key={benefitIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex-shrink-0"></div>
                              <span className="text-white/80 text-xs md:text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column - CTA */}
                    <div className="space-y-4 md:space-y-6">
                      <div className="space-y-3">
                        <button className={`w-full bg-gradient-to-r ${service.color} hover:shadow-2xl text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl`}>
                          Book Consultation
                        </button>
                        <button 
                          onClick={() => handleLearnMore(service)}
                          className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 border border-white/20"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 md:mt-20 text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/20 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 drop-shadow-xl">
                Need Personalized Guidance?
              </h2>
              <p className="text-base md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
                Our expert astrologers are here to help you choose the right service for your specific needs and circumstances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-lg font-medium transition-all duration-300 border border-white/20">
                  Call Now: +91-907-455-5184
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
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-full blur-3xl"></div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;