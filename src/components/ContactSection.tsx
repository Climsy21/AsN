import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Get in Touch Form Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 drop-shadow-xl">
            Get in Touch
          </h2>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 text-white placeholder-white/60"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 text-white placeholder-white/60"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 text-white placeholder-white/60 resize-none"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/30"
            >
              Send
            </button>
          </form>
        </div>

        {/* Reach Out Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-xl">
              Reach Out
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium">Phone</p>
                  <div className="space-y-1">
                    <p className="text-white text-lg font-semibold drop-shadow-lg">+91-907-455-5184</p>
                    <p className="text-white text-lg font-semibold drop-shadow-lg">+91-797-468-6140</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium">Email</p>
                  <p className="text-white text-lg font-semibold drop-shadow-lg">info@shardajyotishkendra.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium">Locations</p>
                  <div className="space-y-2">
                    <p className="text-white text-lg font-semibold drop-shadow-lg">Ujjain, Madhya Pradesh</p>
                    <p className="text-white text-lg font-semibold drop-shadow-lg">Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium">Hours</p>
                  <p className="text-white text-lg font-semibold drop-shadow-lg">Mon-Fri: 9am-5pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58707.95787568!2d75.7849!3d23.1765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963033a0fcbf0b9%3A0x2c4b8b9b8b8b8b8b!2sUjjain%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1635959592679!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ujjain Location Map"
              />
            </div>
            
            {/* Decorative glow around map */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
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

        {/* Cosmic background effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default ContactSection;