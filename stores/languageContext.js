import React, { createContext, useEffect, useState } from 'react';

const LanguageContext = createContext({
  language: 'eng',
  handlelanguage: () => { },
})

export const LanguageContextProvider = ({ children }) => {
    const [language, setlanguage] = useState('eng');

    const handlelanguage = (event, newlanguage) => {
      if (newlanguage != null){
        setlanguage(newlanguage);
      }

    };

    const context = { language, handlelanguage}

  return (
    <LanguageContext.Provider value={context} >
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext