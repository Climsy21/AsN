import React from 'react';
import { Sparkles, Crown, Zap, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ExpertiseSection = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const expertise = [
    {
      icon: Sparkles,
      title: {
        en: 'Navchandi Path',
        hi: 'नवचंडी पाठ'
      },
      description: {
        en: 'Sacred recitation of Durga Saptashati with complete rituals for divine blessings, protection, and removal of obstacles from your life path.',
        hi: 'दिव्य आशीर्वाद, सुरक्षा और आपके जीवन पथ से बाधाओं को हटाने के लिए पूर्ण अनुष्ठानों के साथ दुर्गा सप्तशती का पवित्र पाठ।'
      },
      features: {
        en: ['Complete 9-day ritual', 'Vedic mantras', 'Divine protection', 'Obstacle removal'],
        hi: ['पूर्ण 9-दिवसीय अनुष्ठान', 'वैदिक मंत्र', 'दिव्य सुरक्षा', 'बाधा निवारण']
      },
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Crown,
      title: {
        en: 'Tantra Pujan',
        hi: 'तंत्र पूजन'
      },
      description: {
        en: 'Powerful tantric worship ceremonies combining ancient wisdom with modern needs for prosperity, health, and spiritual advancement.',
        hi: 'समृद्धि, स्वास्थ्य और आध्यात्मिक उन्नति के लिए आधुनिक आवश्यकताओं के साथ प्राचीन ज्ञान को मिलाने वाले शक्तिशाली तांत्रिक पूजा समारोह।'
      },
      features: {
        en: ['Shatru Badha', 'Vashikaran', 'Stamban Kriya', 'Mantra Jap'],
        hi: ['शत्रु बाधा', 'वशीकरण', 'स्तंभन क्रिया', 'मंत्र जप']
      },
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Zap,
      title: {
        en: 'Anustha',
        hi: 'अनुष्ठान'
      },
      description: {
        en: 'Intensive spiritual practices and ceremonies performed with dedication to achieve specific goals and divine intervention in your life.',
        hi: 'विशिष्ट लक्ष्यों को प्राप्त करने और आपके जीवन में दिव्य हस्तक्षेप के लिए समर्पण के साथ किए जाने वाले गहन आध्यात्मिक अभ्यास और समारोह।'
      },
      features: {
        en: ['Dedicated practice', 'Goal-oriented rituals', 'Divine intervention', 'Life transformation'],
        hi: ['समर्पित अभ्यास', 'लक्ष्य-उन्मुख अनुष्ठान', 'दिव्य हस्तक्षेप', 'जीवन परिवर्तन']
      },
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Sun,
      title: {
        en: 'Maha Yagya',
        hi: 'महा यज्ञ'
      },
      description: {
        en: 'Grand fire ceremonies conducted with proper Vedic procedures to invoke cosmic energies for universal peace and personal prosperity.',
        hi: 'सार्वभौमिक शांति और व्यक्तिगत समृद्धि के लिए ब्रह्मांडीय ऊर्जाओं का आह्वान करने के लिए उचित वैदिक प्रक्रियाओं के साथ आयोजित भव्य अग्नि समारोह।'
      },
      features: {
        en: ['Maa Bagla Mukhi Yagya of 41 days', 'Maa Kali Anusthan', 'Universal peace', 'Collective prosperity'],
        hi: ['41 दिन का माँ बगला मुखी यज्ञ', 'माँ काली अनुष्ठान', 'सार्वभौमिक शांति', 'सामूहिक समृद्धि']
      },
      color: 'from-red-500 to-rose-600'
    },
    {
      icon: Zap,
      title: {
        en: 'Rudra Abhishek',
        hi: 'रुद्र अभिषेक'
      },
      description: {
        en: 'Sacred ritual dedicated to Lord Shiva involving ceremonial bathing of the Shiva Lingam with holy substances for divine blessings and spiritual purification.',
        hi: 'भगवान शिव को समर्पित पवित्र अनुष्ठान जिसमें दिव्य आशीर्वाद और आध्यात्मिक शुद्धिकरण के लिए पवित्र पदार्थों के साथ शिव लिंग का औपचारिक स्नान शामिल है।'
      },
      features: {
        en: ['Shiva worship', 'Sacred offerings', 'Spiritual cleansing', 'Divine blessings'],
        hi: ['शिव पूजा', 'पवित्र प्रसाद', 'आध्यात्मिक सफाई', 'दिव्य आशीर्वाद']
      },
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Sun,
      title: {
        en: 'Pran Pratistha',
        hi: 'प्राण प्रतिष्ठा'
      },
      description: {
        en: 'Sacred ceremony to infuse life energy into deities and idols, establishing divine presence and activating spiritual power in sacred spaces.',
        hi: 'देवताओं और मूर्तियों में जीवन ऊर्जा का संचार करने, दिव्य उपस्थिति स्थापित करने और पवित्र स्थानों में आध्यात्मिक शक्ति को सक्रिय करने के लिए पवित्र समारोह।'
      },
      features: {
        en: ['Divine installation', 'Energy infusion', 'Sacred activation', 'Spiritual empowerment'],
        hi: ['दिव्य स्थापना', 'ऊर्जा संचार', 'पवित्र सक्रियण', 'आध्यात्मिक सशक्तिकरण']
      },
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section id="expertise" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
            {t.expertise.title}
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto drop-shadow-lg">
            {t.expertise.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {expertise.map((item, index) => (
            <div
              key={item.title[currentLanguage]}
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
                    {item.title[currentLanguage]}
                  </h3>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-white/80 leading-relaxed mb-8 text-lg">
                {item.description[currentLanguage]}
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {item.features[currentLanguage].map((feature, featureIndex) => (
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
                {t.expertise.bookConsultation}
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