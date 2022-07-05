<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <main>
    <n-page-header>
      <template #title>{{ t("title") }}</template>
    </n-page-header>
  </main>
</template>

<i18n>
{
  "en": {
    "title": "About",
  },
  "fr": {
    "title": "À propos",
  },
}
</i18n>
