import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  isLanguageSelected: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);

  useEffect(() => {
    // Check if language preference exists in localStorage
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hi')) {
      setCurrentLanguage(savedLanguage);
      // Remove this line to ensure popup shows on every refresh
      // setIsLanguageSelected(true);
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language);
    setIsLanguageSelected(true);
    
    // Update document title based on language
    document.title = language === 'hi' 
      ? 'माँ शारदा ज्योतिष केंद्र - ज्योतिषीय अंतर्दृष्टि'
      : 'Sharda Jyotish Kendra - Astro Insights';
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      toggleLanguage,
      isLanguageSelected
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};