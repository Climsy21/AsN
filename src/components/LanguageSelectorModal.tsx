import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelectorModal = () => {
  const { setLanguage } = useLanguage();

  const handleLanguageSelect = (language: 'en' | 'hi') => {
    setLanguage(language);
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl max-w-md w-full text-center">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-xl">
            Choose Your Language
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-xl">
            अपनी भाषा चुनें
          </h2>
          <p className="text-white/80 text-lg">
            Select your preferred language for the website
          </p>
          <p className="text-white/80 text-lg">
            वेबसाइट के लिए अपनी पसंदीदा भाषा चुनें
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleLanguageSelect('en')}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/30"
          >
            English
          </button>
          
          <button
            onClick={() => handleLanguageSelect('hi')}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/30"
          >
            हिंदी (Hindi)
          </button>
        </div>

        <div className="mt-8 text-white/60 text-sm">
          You can change this later in the navigation menu
          <br />
          आप इसे बाद में नेवीगेशन मेनू में बदल सकते हैं
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectorModal;