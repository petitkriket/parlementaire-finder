import { computed } from "vue";
import { enUS, dateEnUS, frFR, dateFrFR } from "naive-ui";

import { i18n } from "@/i18n";
const { locale } = i18n.global;

const uiKitLocaleDict = {
  en: {
    locale: enUS,
    dateLocale: dateEnUS,
  },
  fr: {
    locale: frFR,
    dateLocale: dateFrFR,
  },
};

const languageSettings = computed(() => uiKitLocaleDict[locale.value]);

export default () => {
  return {
    uiKitSettings: {
      locale: languageSettings.value.locale,
      dateLocale: languageSettings.value.dateLocale,
    },
  };
};
