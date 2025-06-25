import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ConnectSection = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: '#',
      color: 'hover:text-blue-300'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'hover:text-pink-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Twitch',
      icon: () => (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
        </svg>
      ),
      url: '#',
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 drop-shadow-xl">
          Connect With Maa Sharda Jyotish Kendra
        </h2>
        
        <div className="flex justify-center items-center space-x-12">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              className={`group transition-all duration-300 transform hover:scale-110 ${social.color}`}
              aria-label={`Follow on ${social.name}`}
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl flex items-center justify-center text-white/80 group-hover:shadow-2xl group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                <social.icon className="w-8 h-8" />
              </div>
            </a>
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
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

        {/* Cosmic glow effects */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default ConnectSection;