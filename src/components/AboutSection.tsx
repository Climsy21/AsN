import React from 'react';
import { Award, BookOpen, Users, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const AboutSection = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const achievements = [
    {
      icon: Award,
      title: t.about.achievements.shastri.title,
      description: t.about.achievements.shastri.description
    },
    {
      icon: BookOpen,
      title: t.about.achievements.acharya.title,
      description: t.about.achievements.acharya.description
    },
    {
      icon: Users,
      title: t.about.achievements.readings.title,
      description: t.about.achievements.readings.description
    },
    {
      icon: Star,
      title: t.about.achievements.experience.title,
      description: t.about.achievements.experience.description
    }
  ];

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Main Image */}
          <div className="relative">
            <div className="relative">
              {/* Main large image */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/image.jpg"
                  alt="Aria Starr - Professional Astrologer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full shadow-2xl">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span className="font-semibold">Expert Astrologer</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -left-10 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-2xl"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
                {t.about.title}
              </h2>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p className="drop-shadow-lg">
                  {t.about.description1}
                </p>
                <p className="drop-shadow-lg">
                  {t.about.description2}
                </p>
                <p className="drop-shadow-lg">
                  {t.about.description3}
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 drop-shadow-lg">
                        {achievement.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/30">
                {t.about.bookReading}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;