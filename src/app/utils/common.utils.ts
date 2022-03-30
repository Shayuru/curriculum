import { DefaultCurriculumInfoEnglish } from '../models/default-info-en-US';
import { DefaultCurriculumInfoSpanish } from '../models/default-info-es-MX';
const languageKey: string = 'language';
const defaultLanguage: string = 'en-US';
const spanishLanguage: string = 'es-MX';

export const getlocalStorageLanguage: any = () => {
  return localStorage.getItem(languageKey) || defaultLanguage;
};

export const saveLocalStorageLanguage = (language: string): void => {
  localStorage.setItem(languageKey, language);
};

export const getDefaultInfo: any = (locale: string) => {
  return locale == spanishLanguage ? DefaultCurriculumInfoSpanish : DefaultCurriculumInfoEnglish;
};

export const getLanguageParameter: any = () => {
  const localeId: string = getlocalStorageLanguage();
  return localeId == spanishLanguage ? 'es' : 'en';
};
