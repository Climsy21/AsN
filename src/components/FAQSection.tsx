import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What insights do you offer?",
      answer: "Our readings provide deep insights into your personality, life path, relationships, and future opportunities. We analyze your birth chart, planetary transits, and cosmic influences to offer personalized guidance that helps you navigate life's challenges and embrace your potential."
    },
    {
      question: "What type of forecasts do you provide?",
      answer: "We offer personalized astrological forecasts including daily, weekly, monthly, and yearly predictions. Our forecasts cover love and relationships, career and finances, health and wellness, and spiritual growth. Each forecast is tailored to your unique birth chart and current planetary influences."
    },
    {
      question: "Are your astrologers qualified?",
      answer: "Yes, our astrologers are highly experienced professionals with years of study and practice. Each astrologer has completed certified training programs and continues their education in various astrological traditions. We ensure our team maintains the highest standards of expertise and ethical practice."
    },
    {
      question: "How do I book a session?",
      answer: "Book a session via our website by selecting your preferred service and available time slot. You can choose from various reading types and durations. After booking, you'll receive a confirmation email with session details and preparation instructions to make the most of your reading."
    },
    {
      question: "What areas do you cover?",
      answer: "We cover various astrological aspects including natal chart analysis, compatibility readings, career guidance, spiritual development, timing for important decisions, past life insights, and chakra alignment. Our comprehensive approach addresses all areas of life where cosmic wisdom can provide clarity and direction."
    },
    {
      question: "How accurate are your predictions?",
      answer: "Our predictions are based on time-tested astrological principles and techniques. While astrology provides valuable insights and guidance, we emphasize that you have free will to shape your destiny. Our readings offer potential outcomes and timing to help you make informed decisions and prepare for opportunities."
    },
    {
      question: "Do you offer refunds?",
      answer: "We stand behind the quality of our services. If you're not satisfied with your reading, please contact us within 48 hours to discuss your concerns. We offer refunds or complimentary follow-up sessions on a case-by-case basis to ensure your complete satisfaction with our cosmic guidance."
    },
    {
      question: "How long does a typical reading take?",
      answer: "Reading duration varies by service type. Basic readings typically take 30-45 minutes, comprehensive readings last 60-90 minutes, and premium consultations can extend to 2 hours. We ensure adequate time to thoroughly explore your questions and provide detailed insights without rushing the process."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto drop-shadow-lg">
            Find answers to common questions about our cosmic guidance services
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden shadow-2xl transition-all duration-300 hover:bg-white/15"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:ring-inset"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-lg pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="h-px bg-white/20 mb-6"></div>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-white/70 mb-8 text-lg">
            Still have questions? We're here to help guide your cosmic journey.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/30">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;