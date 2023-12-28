import i18n from "i18next";
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";
import translationEN from "../utils/locales/en/translation.json";
import translationUA from "../utils/locales/ua/translation.json";

const resources = {
  en: {
    translation:  translationEN,
  },
  ua: {
    translation: translationUA,
  }
};

i18n
  .use(detector)
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en',
    whitelist: ['en', 'ua'],
    debug: false,
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;