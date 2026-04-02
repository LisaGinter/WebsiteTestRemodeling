import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LOCALES } from "../constants";

export default {
  [LOCALES.ENGLISH]
}

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        navbar: {
          me: "ME",
          work: "WORK",
          skills: "SKILLS",
          blog: "BLOG",
          hero: "HOME",
        },
      },
    },
    de: {
      translation: {
        navbar: {
          me: "ÜBER MICH",
          work: "MEINE PROJEKET",
          skills: "FÄHIGKEITEN",
          blog: "BLOG",
          hero: "HOME",
        },
      },
    },
  },
});
