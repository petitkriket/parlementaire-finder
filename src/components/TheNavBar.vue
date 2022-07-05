<script setup lang="ts">
import { h, ref } from "vue";
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";
import type { MenuOption } from "naive-ui";

const { t } = useI18n();
const menuOptions: MenuOption[] = [
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
    key: "go-to-landing-page",
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
    key: "go-to-deputies-page",
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
    key: "go-to-about-page",
  },
];
const activeKey = ref(null);
</script>

<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
</template>

<i18n>
{
  "en": {
    "home": "Home",
    "deputies": "Deputies",
    "about": "About",
  },
  "fr": {
    "home": "Accueil",
    "deputies": "Parlementaires",
    "about": "À propos",
  }
}
</i18n>
