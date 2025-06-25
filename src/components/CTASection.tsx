import React from 'react';
import { Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Cosmic Guidance
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Awaits You
            </span>
          </h2>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Unlock the mysteries of your destiny with personalized astrological insights. 
            Your cosmic journey begins with a single step.
          </p>
          
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/30">
            Get Your Reading
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;