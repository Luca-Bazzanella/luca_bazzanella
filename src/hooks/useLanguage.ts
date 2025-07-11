import { useState, useEffect } from 'react';

// Import only the videos files that we want to keep separate
import videosIt from '../data/it/videos.json';
import videosEn from '../data/en/videos.json';

// Keep existing large files for other sections
import contentIt from '../data/content-it.json';
import contentEn from '../data/content-en.json';

export type Language = 'it' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('it');

  // Compose content using main files for most content, separate files only for videos
  const content = language === 'it' ? {
    navigation: contentIt.navigation,
    hero: contentIt.hero,
    about: contentIt.about,
    videos: videosIt,
    outsourcedManagement: contentIt.outsourcedManagement,
    digitalization: contentIt.digitalization,
    sustainability: contentIt.sustainability,
    conferences: contentIt.conferences,
    footer: contentIt.footer
  } : {
    navigation: contentEn.navigation,
    hero: contentEn.hero,
    about: contentEn.about,
    videos: videosEn,
    outsourcedManagement: contentEn.outsourcedManagement,
    digitalization: contentEn.digitalization,
    sustainability: contentEn.sustainability,
    conferences: contentEn.conferences,
    footer: contentEn.footer
  };

  const toggleLanguage = () => {
    const newLang = language === 'it' ? 'en' : 'it';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    
    // Force a re-render by dispatching a custom event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: newLang }));
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'it' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }

    // Listen for language changes from other components
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
    };
  }, []);

  return {
    language,
    content,
    toggleLanguage
  };
};
