import React from 'react';
import { services } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface ServicesSectionProps {
  onNavigate: (page: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const handleLearnMore = (service: any) => {
    const serviceSlug = service.title[currentLanguage].toLowerCase().replace(/\s+/g, '-');
    onNavigate(`service-detail-${serviceSlug}`);
  };

  // Helper function to truncate description
  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <section id="services" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
            {t.services.title}
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto drop-shadow-lg">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title[currentLanguage]}
              className="group bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-2xl h-full"
              style={{
                animationDelay: `${index * 0.01}s`
              }}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 mb-4`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white drop-shadow-lg mb-3">
                      {service.title[currentLanguage]}
                    </h3>
                  </div>
                  
                  <p className="text-white/80 leading-relaxed mb-6 text-sm">
                    {truncateDescription(service.description[currentLanguage])}
                  </p>
                </div>
                
                <button 
                  onClick={() => handleLearnMore(service)}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg group-hover:shadow-xl"
                >
                  {t.services.learnMore}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
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
      </div>
    </section>
  );
};

export default ServicesSection;