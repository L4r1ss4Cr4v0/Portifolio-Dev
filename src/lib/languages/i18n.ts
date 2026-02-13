import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import ptBR from "./pt-br.json";
import es from "./es.json";

const savedLanguage = localStorage.getItem("language");

i18n.use(initReactI18next).init({
  fallbackLng: "ptBR",
  supportedLngs: ["en", "ptBR", "es"],
  lng: savedLanguage || "ptBR",
  resources: {
    en: { translation: en },
    ptBR: { translation: ptBR },
    es: { translation: es },
  },
  react: { useSuspense: false },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
