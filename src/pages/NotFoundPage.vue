<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <main>
    <n-page-header :subtitle="t('subtitle')">
      <template #title>{{ t("title") }}</template>
    </n-page-header>
  </main>
</template>

<i18n>
{
  "en": {
    "title": "404",
    "subtitle": "The page you are looking for does not exist.",

  },
  "fr": {
    "title": "404",
    "subtitle": "La page que vous recherchez n'existe pas.",
  },
}
</i18n>
