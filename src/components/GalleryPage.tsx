import React, { useState, useEffect } from 'react';
import { Stars, X, ArrowLeft, Eye, Grid, Download } from 'lucide-react';
import { galleryImages } from '../data/galleryData';
import CosmicBackground from './CosmicBackground';
import Footer from './Footer';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen || selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, selectedImage]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage(prev => prev === null ? null : (prev > 0 ? prev - 1 : galleryImages.length - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedImage(prev => prev === null ? null : (prev < galleryImages.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (page: string) => {
    closeMobileMenu();
    onNavigate(page);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage(prev => prev === null ? null : (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  const prevImage = () => {
    setSelectedImage(prev => prev === null ? null : (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CosmicBackground />
      
      {/* Mobile/Desktop Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/15 backdrop-blur-md border border-white/30 rounded-full mx-4 mt-4 shadow-2xl">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Mobile Layout */}
          {isMobile ? (
            <>
              <button
                onClick={toggleMobileMenu}
                className="flex items-center justify-between w-full focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="flex items-center space-x-3 flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
                    {isMobileMenuOpen ? (
                      <X className="w-6 h-6 text-white transition-all duration-300" />
                    ) : (
                      <Stars className="w-6 h-6 text-white transition-all duration-300" />
                    )}
                  </div>
                </div>
                
                <div className="flex-1 flex justify-center px-2">
                  <span className="text-white font-semibold text-base drop-shadow-lg whitespace-nowrap">
                    Maa Sharda Jyotish Kendra
                  </span>
                </div>
                
                <div className="flex-shrink-0 w-12"></div>
              </button>
            </>
          ) : (
            <>
              {/* Desktop Layout */}
              <button 
                onClick={() => onNavigate('home')}
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-800 rounded-full flex items-center justify-center shadow-lg">
                  <Stars className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold text-lg drop-shadow-lg">Maa Sharda Jyotish Kendra</span>
              </button>
              
              <nav className="flex items-center space-x-8">
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  Home
                </button>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  About
                </button>
                <button 
                  onClick={() => onNavigate('services-page')}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  Services
                </button>
                <span className="text-white font-semibold drop-shadow-lg">Gallery</span>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                  Contact
                </button>
              </nav>
              
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg font-semibold">
                Book Now
              </button>
            </>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <>
          <div
            className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? 'backdrop-blur-sm bg-black/60 opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
            onClick={closeMobileMenu}
          />

          <div
            className={`fixed top-0 right-0 h-full w-1/2 bg-white/20 backdrop-blur-xl border-l border-white/30 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full pt-24 px-6">
              <nav className="flex flex-col space-y-6 flex-grow">
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-white/90 hover:text-white text-left text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-white/90 hover:text-white text-left text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  About
                </button>
                <button
                  onClick={() => handleNavClick('services-page')}
                  className="text-white/90 hover:text-white text-left text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  Services
                </button>
                <span className="text-white text-left text-xl font-semibold drop-shadow-lg py-3 border-b border-white/20">
                  Gallery
                </span>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-white/90 hover:text-white text-left text-xl font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-lg py-3 border-b border-white/20"
                >
                  Contact
                </button>
              </nav>

              <div className="pb-8">
                <button
                  onClick={closeMobileMenu}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/30"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm md:text-base">Back to Home</span>
          </button>

          {/* Gallery Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Grid className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-6">
              Sacred Gallery
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto drop-shadow-lg">
              Witness the divine moments and sacred ceremonies that transform lives through spiritual practice
            </p>
            <div className="mt-8 text-white/60">
              <p className="text-sm md:text-base">
                {galleryImages.length} Sacred Images • Click any image to view in full size
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-16">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-500 bg-white/10 backdrop-blur-md"
                onClick={() => openLightbox(index)}
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                  />
                  
                  {/* Overlay with title and view icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <h3 className="text-white font-semibold text-xs md:text-sm drop-shadow-lg">
                        {image.title}
                      </h3>
                    </div>
                    
                    {/* View icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <Eye className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Stats */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 drop-shadow-xl">
                Sacred Moments Captured
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Each image represents a moment of divine connection and spiritual transformation. 
                These sacred ceremonies have blessed countless lives with peace, prosperity, and spiritual growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{galleryImages.length}+</div>
                  <div className="text-white/70">Sacred Images</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                  <div className="text-white/70">Ceremonies Documented</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
                  <div className="text-white/70">Lives Blessed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 60 }).map((_, i) => (
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
        <div className="absolute top-3/4 left-3/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ArrowLeft className="w-6 h-6 rotate-180" />
          </button>

          {/* Image container */}
          <div className="relative max-w-7xl max-h-full">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
            
            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                Image {selectedImage + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeLightbox}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;