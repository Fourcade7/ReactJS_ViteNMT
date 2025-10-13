import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// JSON fayllarni import qilamiz
import translationUZ from "./locales/translationuz.json";
import translationRU from "./locales/translationru.json";
import translationEN from "./locales/translationen.json";


i18n
  .use(initReactI18next) // React bilan bog‘lash
  .init({
    resources: {
      uz: { translation: translationUZ },
      ru: { translation: translationRU },
      en: { translation: translationEN }
    },
    lng: "en", // boshlang‘ich til
    fallbackLng: "en", // agar tarjima topilmasa inglizchani oladi
    interpolation: {
      escapeValue: false // React uchun kerak emas
    }
  });

export default i18n;
