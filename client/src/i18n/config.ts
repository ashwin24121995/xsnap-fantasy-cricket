import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import common translations
import enCommon from './locales/en/common.json';
import hiCommon from './locales/hi/common.json';
import taCommon from './locales/ta/common.json';
import teCommon from './locales/te/common.json';
import mrCommon from './locales/mr/common.json';

// Import page translations
import enAbout from './locales/en/about.json';
import hiAbout from './locales/hi/about.json';
import taAbout from './locales/ta/about.json';
import teAbout from './locales/te/about.json';
import mrAbout from './locales/mr/about.json';

import enHowToPlay from './locales/en/howToPlay.json';
import hiHowToPlay from './locales/hi/howToPlay.json';
import taHowToPlay from './locales/ta/howToPlay.json';
import teHowToPlay from './locales/te/howToPlay.json';
import mrHowToPlay from './locales/mr/howToPlay.json';

import enFaq from './locales/en/faq.json';
import hiFaq from './locales/hi/faq.json';
import taFaq from './locales/ta/faq.json';
import teFaq from './locales/te/faq.json';
import mrFaq from './locales/mr/faq.json';

import enTerms from './locales/en/terms.json';
import hiTerms from './locales/hi/terms.json';
import taTerms from './locales/ta/terms.json';
import teTerms from './locales/te/terms.json';
import mrTerms from './locales/mr/terms.json';

import enPrivacy from './locales/en/privacy.json';
import hiPrivacy from './locales/hi/privacy.json';
import taPrivacy from './locales/ta/privacy.json';
import tePrivacy from './locales/te/privacy.json';
import mrPrivacy from './locales/mr/privacy.json';

import enFairPlay from './locales/en/fairPlay.json';
import hiFairPlay from './locales/hi/fairPlay.json';
import taFairPlay from './locales/ta/fairPlay.json';
import teFairPlay from './locales/te/fairPlay.json';
import mrFairPlay from './locales/mr/fairPlay.json';

import enResponsibleGaming from './locales/en/responsibleGaming.json';
import hiResponsibleGaming from './locales/hi/responsibleGaming.json';
import taResponsibleGaming from './locales/ta/responsibleGaming.json';
import teResponsibleGaming from './locales/te/responsibleGaming.json';
import mrResponsibleGaming from './locales/mr/responsibleGaming.json';

const resources = {
  en: {
    translation: { ...enCommon, ...enAbout, ...enHowToPlay, ...enFaq, ...enTerms, ...enPrivacy, ...enFairPlay, ...enResponsibleGaming },
  },
  hi: {
    translation: { ...hiCommon, ...hiAbout, ...hiHowToPlay, ...hiFaq, ...hiTerms, ...hiPrivacy, ...hiFairPlay, ...hiResponsibleGaming },
  },
  ta: {
    translation: { ...taCommon, ...taAbout, ...taHowToPlay, ...taFaq, ...taTerms, ...taPrivacy, ...taFairPlay, ...taResponsibleGaming },
  },
  te: {
    translation: { ...teCommon, ...teAbout, ...teHowToPlay, ...teFaq, ...teTerms, ...tePrivacy, ...teFairPlay, ...teResponsibleGaming },
  },
  mr: {
    translation: { ...mrCommon, ...mrAbout, ...mrHowToPlay, ...mrFaq, ...mrTerms, ...mrPrivacy, ...mrFairPlay, ...mrResponsibleGaming },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'hi', 'ta', 'te', 'mr'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
