import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background - Only in Hero */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/199580-910653705_tiny.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better content readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="text-center z-10 px-4 relative">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
          Astro Insights
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-lg">
          Guiding you through the stars above.
        </p>
        <button className="bg-transparent border-2 border-white/40 text-white px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm shadow-2xl hover:scale-105">
          Read More
        </button>
      </div>
    </section>
  );
};

export default Hero;