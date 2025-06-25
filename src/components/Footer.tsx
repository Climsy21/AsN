import React from 'react';
import { Stars } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Readings', href: '#readings' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-black text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4 mb-8 md:mb-0">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-800 rounded-full flex items-center justify-center shadow-lg">
              <Stars className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-white font-semibold text-lg">Maa Sharda Jyotish Kendra</span>
              <p className="text-white/60 text-sm">© {currentYear} Maa Sharda Jyotish Kendra</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors duration-300 text-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Decorative line */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-center text-white/60 text-sm">
            Guiding you through the stars above with cosmic wisdom and celestial insights.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;