import { useCallback, useEffect, useMemo, useState } from 'react';
import { translations } from '../data/translations';
import { LanguageContext } from './languageContextValue';

const STORAGE_KEY = 'srt-lang';

const getInitialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'id' || saved === 'en') return saved;
  } catch {
    /* storage tidak tersedia */
  }
  return 'id'; // Default bahasa Indonesia
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* abaikan */
    }
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  }, []);

  const value = useMemo(
    () => ({ lang, toggleLanguage, t: translations[lang] }),
    [lang, toggleLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
