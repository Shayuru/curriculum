import { DefaultCurriculumInfoEnglish } from '../models/default-info-en-US';
import { DefaultCurriculumInfoSpanish } from '../models/default-info-es-MX';
const languageKey: string = 'language';
const defaultLanguage: string = 'en-US';
const spanishLanguage: string = 'es-MX';

export const getlocalStorageLanguage: any = (localStorage: Storage) => {
  return localStorage.getItem(languageKey) || defaultLanguage;
};

export const saveLocalStorageLanguage = (
  localStorage: Storage,
  language: string
): void => {
  localStorage.setItem(languageKey, language);
};

export const getDefaultInfo: any = (locale: string) => {
  return locale == spanishLanguage
    ? DefaultCurriculumInfoSpanish
    : DefaultCurriculumInfoEnglish;
};

export const getLanguageParameter: any = (localStorage: Storage) => {
  const localeId: string = getlocalStorageLanguage(localStorage);
  return localeId == spanishLanguage ? 'es' : 'en';
};
