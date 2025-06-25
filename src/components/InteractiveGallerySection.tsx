import React from 'react';
import { Grid } from 'lucide-react';
import { galleryImages } from '../data/galleryData';

interface InteractiveGallerySectionProps {
  onNavigate: (page: string) => void;
}

const InteractiveGallerySection: React.FC<InteractiveGallerySectionProps> = ({ onNavigate }) => {
  // Initial number of images to show
  const initialVisibleCount = 8;
  
  // Determine which images to show
  const imagesToShow = galleryImages.slice(0, initialVisibleCount);
  const hasMoreImages = galleryImages.length > initialVisibleCount;

  const handleShowAll = () => {
    onNavigate('gallery-page');
  };

  return (
    <section id="interactive-gallery" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <Grid className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
            Sacred Gallery
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto drop-shadow-lg">
            Witness the divine moments and sacred ceremonies that transform lives through spiritual practice
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {imagesToShow.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-500 bg-white/10 backdrop-blur-md"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={image.src}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                />
                
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        {hasMoreImages && (
          <div className="text-center">
            <button
              onClick={handleShowAll}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/30 group"
            >
              <span className="flex items-center space-x-2">
                <Grid className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>View All</span>
              </span>
            </button>
          </div>
        )}

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

        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default InteractiveGallerySection;