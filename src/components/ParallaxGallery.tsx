import React, { useEffect, useRef } from 'react';

const ParallaxGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const images = [
    // First row images
    [
      "/IMG-20250625-WA0030.jpg",
      "/IMG-20250625-WA0028.jpg",
      "/IMG-20250625-WA0032.jpg",
      "/IMG-20250625-WA0034.jpg",
      "/IMG-20250625-WA0043.jpg",
    ],
    // Second row images
    [
      "/IMG-20250625-WA0037.jpg",
      "/IMG-20250625-WA0059.jpg",
      "/IMG-20250625-WA0058.jpg",
      "/IMG-20250625-WA0052.jpg",
      "/IMG-20250625-WA0012.jpg",
    ]
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current || !row1Ref.current || !row2Ref.current) return;

      const rect = galleryRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress when gallery is in view
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));

      // Apply transforms based on scroll progress - Made much faster with increased multiplier
      const maxTransform = 600; // Increased from 200 to 600 for faster movement
      
      // First row moves left to right (positive transform)
      const row1Transform = (scrollProgress - 0.5) * maxTransform;
      row1Ref.current.style.transform = `translateX(${row1Transform}px)`;
      
      // Second row moves right to left (negative transform)
      const row2Transform = -(scrollProgress - 0.5) * maxTransform;
      row2Ref.current.style.transform = `translateX(${row2Transform}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="gallery" ref={galleryRef} className="py-32 overflow-hidden relative">
      <div className="space-y-8 relative z-10">
        {/* First Row - Moves Left to Right - Made faster with reduced transition duration */}
        <div ref={row1Ref} className="flex space-x-8 transition-transform duration-0 ease-out">
          {images[0].map((src, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-96 h-64 rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
            >
              <img
                src={src}
                alt={`Cosmic scene ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 brightness-75"
              />
            </div>
          ))}
          {/* Duplicate images for seamless scrolling effect */}
          {images[0].map((src, index) => (
            <div
              key={`row1-dup-${index}`}
              className="flex-shrink-0 w-96 h-64 rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
            >
              <img
                src={src}
                alt={`Cosmic scene ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 brightness-75"
              />
            </div>
          ))}
        </div>

        {/* Second Row - Moves Right to Left - Made faster with reduced transition duration */}
        <div ref={row2Ref} className="flex space-x-8 transition-transform duration-0 ease-out">
          {images[1].map((src, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-96 h-64 rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
            >
              <img
                src={src}
                alt={`Cosmic scene ${index + 6}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 brightness-75"
              />
            </div>
          ))}
          {/* Duplicate images for seamless scrolling effect */}
          {images[1].map((src, index) => (
            <div
              key={`row2-dup-${index}`}
              className="flex-shrink-0 w-96 h-64 rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
            >
              <img
                src={src}
                alt={`Cosmic scene ${index + 6}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 brightness-75"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxGallery;