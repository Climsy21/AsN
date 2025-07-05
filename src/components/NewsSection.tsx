import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const NewsSection = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const newsItems = [
    {
      id: 1,
      title: t.news.tantraPujan.title,
      description: t.news.tantraPujan.description,
      image: "/img-2.jpg"
    },
    {
      id: 2,
      title: t.news.mahaYagya.title,
      description: t.news.mahaYagya.description,
      image: "/img-3.jpg"
    },
    {
      id: 3,
      title: t.news.rudraAbhishek.title,
      description: t.news.rudraAbhishek.description,
      image: "/img-4.jpg"
    },
    {
      id: 4,
      title: t.news.pranPratistha.title,
      description: t.news.pranPratistha.description,
      image: "/img-5.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16 drop-shadow-xl">
          {t.news.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-2xl">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;