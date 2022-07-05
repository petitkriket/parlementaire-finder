<script setup lang="ts">
import { h, ref } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
import type { MenuOption } from "naive-ui";

const { t } = useI18n();
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        "a",
        {
          href: "https://github.com/regardscitoyens/nosdeputes.fr/blob/master/doc/opendata.md",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        t("openData")
      ),
    key: "go-to-data-source",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "terms-of-use-page",
          },
        },
        { default: () => t("ToS") }
      ),
    key: "go-to-terms-of-use-page",
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
    "openData": "Open Data Source",
    "ToS": "Terms of Use",
    "about": "About",
  },
  "fr": {
    "openData": "Données Open Data",
    "ToS": "Conditions d'utilisation",
    "about": "À propos",
  }
}
</i18n>
