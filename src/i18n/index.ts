import { createI18n } from "vue-i18n";

import en from "./locales/en";
import fr from "./locales/fr";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: navigator.language.split("-")[0],
  fallbackLocale: "en",
  messages: {
    en,
    fr,
  },
});
