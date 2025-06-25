import React from 'react';

const TrustedBySection = () => {
  const brands = [
    {
      name: 'Google',
      logo: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
    },
    {
      name: 'Nashville',
      logo: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
    },
    {
      name: 'Harley Davidson',
      logo: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
    },
    {
      name: 'Red Bull',
      logo: 'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
    },
    {
      name: 'Tesla',
      logo: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
    },
    {
      name: 'Dior',
      logo: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-xl">
            Trusted By:
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto drop-shadow-lg">
            Leading brands and individuals trust our cosmic guidance for important decisions
          </p>
        </div>

        {/* Scrolling brands container */}
        <div className="relative overflow-hidden">
          <div className="flex whitespace-nowrap animate-scroll-brands">
            {/* First set of brands */}
            {Array.from({ length: 4 }).map((_, setIndex) => (
              <div key={setIndex} className="flex items-center space-x-12 mr-12">
                {brands.map((brand, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="group cursor-pointer transform transition-all duration-300 hover:scale-110 flex-shrink-0"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl w-48 h-24">
                      <div className="w-full h-full overflow-hidden rounded-xl flex items-center justify-center">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
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
      </div>
    </section>
  );
};

export default TrustedBySection;