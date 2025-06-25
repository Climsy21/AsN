import React from 'react';
import { Sparkles, Crown, Zap, Sun } from 'lucide-react';

const ExpertiseSection = () => {
  const expertise = [
    {
      icon: Sparkles,
      title: 'Navchandi Path',
      description: 'Sacred recitation of Durga Saptashati with complete rituals for divine blessings, protection, and removal of obstacles from your life path.',
      features: ['Complete 9-day ritual', 'Vedic mantras', 'Divine protection', 'Obstacle removal'],
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Crown,
      title: 'Tantra Pujan',
      description: 'Powerful tantric worship ceremonies combining ancient wisdom with modern needs for prosperity, health, and spiritual advancement.',
      features: ['Shatru Badha', 'Vashikaran', 'Stamban Kriya', 'Mantra Jap'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Anustha',
      description: 'Intensive spiritual practices and ceremonies performed with dedication to achieve specific goals and divine intervention in your life.',
      features: ['Dedicated practice', 'Goal-oriented rituals', 'Divine intervention', 'Life transformation'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Sun,
      title: 'Maha Yagya',
      description: 'Grand fire ceremonies conducted with proper Vedic procedures to invoke cosmic energies for universal peace and personal prosperity.',
      features: ['Maa Bagla Mukhi Yagya of 41 days', 'Maa Kali Anusthan', 'Universal peace', 'Collective prosperity'],
      color: 'from-red-500 to-rose-600'
    },
    {
      icon: Zap,
      title: 'Rudra Abhishek',
      description: 'Sacred ritual dedicated to Lord Shiva involving ceremonial bathing of the Shiva Lingam with holy substances for divine blessings and spiritual purification.',
      features: ['Shiva worship', 'Sacred offerings', 'Spiritual cleansing', 'Divine blessings'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Sun,
      title: 'Pran Pratistha',
      description: 'Sacred ceremony to infuse life energy into deities and idols, establishing divine presence and activating spiritual power in sacred spaces.',
      features: ['Divine installation', 'Energy infusion', 'Sacred activation', 'Spiritual empowerment'],
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section id="expertise" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
            Our Expertise
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto drop-shadow-lg">
            Specialized in powerful Vedic ceremonies and tantric practices for spiritual transformation and divine blessings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className="group bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-2xl"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-white/80 leading-relaxed mb-8 text-lg">
                {item.description}
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {item.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3 bg-white/5 rounded-2xl p-4 border border-white/10"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                    <span className="text-white/90 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <button className={`bg-gradient-to-r ${item.color} hover:shadow-2xl text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl`}>
                Book Consultation
              </button>
            </div>
          ))}
        </div>

        {/* Central decorative element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-full blur-3xl"></div>

        {/* Floating sacred symbols */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-white/10 text-4xl font-bold"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              ॐ
            </div>
          ))}
        </div>

        {/* Background cosmic effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default ExpertiseSection;