<script setup lang="ts">
import { h } from "vue";
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";
import type { MenuOption } from "naive-ui";
const { t } = useI18n();
const { availableLocales } = useI18n({ useScope: "global" });

const mainMenu: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "landing-page",
          },
        },
        { default: () => t("home") }
      ),
    key: "landing-page",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "deputies-page",
          },
        },
        { default: () => t("deputies") }
      ),
    key: "deputies-page",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "about-page",
          },
        },
        { default: () => t("about") }
      ),
    key: "about-page",
  },
];

const localeMenu: MenuOption[] = [
  {
    label: "Langue",
    key: "locale",
    children: availableLocales.map((locale) => ({
      label: t(locale),
      key: locale,
    })),
  },
];
</script>

<template>
  <div class="flex flex-row justify-between items-center">
    <span></span>

    <div>
      <n-menu :value="$route.name" mode="horizontal" :options="mainMenu" />

      <span class="mx-8" />

      <n-menu
        mode="horizontal"
        :options="localeMenu"
        @update:value="$i18n.locale = $event"
      />
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "home": "Home",
    "deputies": "Deputies",
    "about": "About",
    "fr": "Français",
    "en": "English",
  },
  "fr": {
    "home": "Accueil",
    "deputies": "Parlementaires",
    "about": "À propos",
  }
}
</i18n>
