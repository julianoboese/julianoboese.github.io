import React, { createContext, useMemo, useCallback, useState } from 'react';

export const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  const toggleLanguage = useCallback((_event, newLanguage) => {
    if (newLanguage) {
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
    }
  });

  const contextValue = useMemo(() => ({
    language, toggleLanguage,
  }), [language, setLanguage]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContextProvider;
