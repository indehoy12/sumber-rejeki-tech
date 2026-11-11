import { useContext } from 'react';
import { LanguageContext } from '../contexts/languageContextValue';

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage harus dipakai di dalam LanguageProvider');
  return ctx;
};
