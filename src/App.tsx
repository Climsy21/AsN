import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import AppRouter from './components/AppRouter';
import LanguageSelectorModal from './components/LanguageSelectorModal';

function AppContent() {
  const { isLanguageSelected } = useLanguage();

  return (
    <>
      {!isLanguageSelected && <LanguageSelectorModal />}
      <AppRouter />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;