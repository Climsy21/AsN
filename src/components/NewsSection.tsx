import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Tantra Pujan",
      description: "Tantra Pujan involves powerful rituals to overcome obstacles, protect against negative forces, and restore harmony. Practices like Shatru Badha, Vashikaran, and Stamban Kriya are performed with devotion and precision to address specific life challenges.",
      image: "/img-2.jpg"
    },
    {
      id: 2,
      title: "Maha Yagya",
      description: "Maha Yagya is a sacred fire ritual performed to invoke divine blessings and spiritual purification. Special ceremonies like the 41-day Maa Baglamukhi Yagya and Maa Kali Anushtha are conducted with deep devotion to remove obstacles and empower positive transformation.",
      image: "/img-3.jpg"
    },
    {
      id: 3,
      title: "Rudra Abhishek",
      description: "Rudra Abhishek is a powerful ritual dedicated to Lord Shiva, performed to cleanse negative energies, bring peace, and fulfill heartfelt desires through sacred chants and offerings. This divine ceremony is believed to invoke Shiva’s blessings for health, prosperity and spiritual growth.",
      image: "/img-4.jpg"
    },
    {
      id: 4,
      title: "Pran Pratistha",
      description: "Pran Pratistha is a sacred ritual where life energy is infused into an idol or deity, transforming it into a living presence. This ceremony is essential for establishing divine and spiritual blessings in temples and homes. It invites divine grace and peace.",
      image: "/img-5.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16 drop-shadow-xl">
          Latest Pujan
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