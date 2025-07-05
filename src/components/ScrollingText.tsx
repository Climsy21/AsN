import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ScrollingText = () => {
  const { currentLanguage } = useLanguage();
  const scrollingText = translations[currentLanguage].scrollingText;

  return (
    <section className="py-20 overflow-hidden relative">
      <div className="relative z-10">
        {/* Scrolling Text Marquee */}
        <div className="relative mb-16">
          <div className="flex whitespace-nowrap animate-scroll-seamless">
            {/* First set of text */}
            <div className="flex items-center text-6xl md:text-8xl font-bold text-white/80 drop-shadow-2xl">
              {Array.from({ length: 20 }).map((_, index) => (
                <span key={`first-${index}`} className="inline-block">
                  {scrollingText}
                </span>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center text-6xl md:text-8xl font-bold text-white/80 drop-shadow-2xl">
              {Array.from({ length: 20 }).map((_, index) => (
                <span key={`second-${index}`} className="inline-block">
                  {scrollingText}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingText;