import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const FAQSection = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t.faq.questions.insights.question,
      answer: t.faq.questions.insights.answer
    },
    {
      question: t.faq.questions.forecasts.question,
      answer: t.faq.questions.forecasts.answer
    },
    {
      question: t.faq.questions.qualified.question,
      answer: t.faq.questions.qualified.answer
    },
    {
      question: t.faq.questions.booking.question,
      answer: t.faq.questions.booking.answer
    },
    {
      question: t.faq.questions.areas.question,
      answer: t.faq.questions.areas.answer
    },
    {
      question: t.faq.questions.accuracy.question,
      answer: t.faq.questions.accuracy.answer
    },
    {
      question: t.faq.questions.refunds.question,
      answer: t.faq.questions.refunds.answer
    },
    {
      question: t.faq.questions.duration.question,
      answer: t.faq.questions.duration.answer
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
            {t.faq.title}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto drop-shadow-lg">
            {t.faq.subtitle}
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
            {t.faq.stillHaveQuestions}
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/30">
            {t.faq.contactUs}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;