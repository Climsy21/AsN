import React, { useState, useEffect } from 'react';
import { services } from '../data/servicesData';
import Header from './Header';
import Hero from './Hero';
import NewsSection from './NewsSection';
import TrustedBySection from './TrustedBySection';
import ParallaxGallery from './ParallaxGallery';
import ScrollingText from './ScrollingText';
import InteractiveGallerySection from './InteractiveGallerySection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ServicesPage from './ServicesPage';
import ServiceDetailPage from './ServiceDetailPage';
import GalleryPage from './GalleryPage';
import StatsSection from './StatsSection';
import ConnectSection from './ConnectSection';
import ContactSection from './ContactSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import Footer from './Footer';
import CosmicBackground from './CosmicBackground';
import ExpertiseSection from './ExpertiseSection';

const AppRouter = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle navigation
  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `#${page}`);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(hash || 'home');
    };

    // Set initial page based on URL
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash) {
      setCurrentPage(initialHash);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Render Service Detail Page
  if (currentPage.startsWith('service-detail-')) {
    const serviceSlug = currentPage.replace('service-detail-', '');
    const service = services.find(s => 
      s.title.toLowerCase().replace(/\s+/g, '-') === serviceSlug
    );
    
    if (service) {
      return <ServiceDetailPage service={service} onNavigate={navigateToPage} />;
    }
  }

  // Render Services Page
  if (currentPage === 'services-page') {
    return <ServicesPage services={services} onNavigate={navigateToPage} />;
  }

  // Render Gallery Page
  if (currentPage === 'gallery-page') {
    return <GalleryPage onNavigate={navigateToPage} />;
  }

  // Render Main Website
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CosmicBackground />
      <Header onNavigate={navigateToPage} />
      <main>
        <Hero />
        <NewsSection />
        <ParallaxGallery />
        <ScrollingText />
        <AboutSection />
        <ServicesSection onNavigate={navigateToPage} />
        <InteractiveGallerySection onNavigate={navigateToPage} />
        <ExpertiseSection />
        <TrustedBySection />
        <StatsSection />
        <CTASection />
        <FAQSection />
        <ConnectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AppRouter;