import React, {
  createContext, useMemo, useCallback, useState,
} from 'react';

export const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = useCallback((_event, newLanguage) => {
    if (newLanguage) {
      setLanguage(newLanguage);
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
