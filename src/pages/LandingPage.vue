<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import { useOrganizationsQuery } from "@/queries/organization.js";
import sampleSize from "lodash.samplesize";

const { t } = useI18n();
const router = useRouter();

const { isLoading, isSuccess, data } = useOrganizationsQuery({
  active: true,
});

const sample = computed(() =>
  data?.value?.organizations ? sampleSize(data.value.organizations, 5) : []
);
</script>

<template>
  <main>
    <n-page-header :subtitle="t('subtitle')">
      <template #title>{{ t("title") }}</template>
    </n-page-header>

    <n-divider />

    <section
      class="flex items-center justify-around bg-stone-100 rounded-xl p-14"
    >
      <span class="w-1/2">
        {{ t("catchPhrase") }}
      </span>

      <n-button
        size="large"
        type="primary"
        @click="router.push({ name: 'deputies-page' })"
      >
        {{ t("callToAction") }}
      </n-button>
    </section>

    <n-divider />

    <section>
      <n-h2>{{ t("firstSectionTitle") }}</n-h2>
      <n-grid cols="1 400:3 800:5" :x-gap="8" :y-gap="8">
        <template v-if="isLoading">
          <n-grid-item v-for="i in 5" :key="i">
            <BaseSkeletonCard />
          </n-grid-item>
        </template>

        <template v-if="isSuccess">
          <n-grid-item v-for="organization in sample" :key="organization.id">
            <OrganizationCard v-bind="organization" />
          </n-grid-item>
        </template>
      </n-grid>
    </section>
    <n-divider />
  </main>
</template>

<i18n>
{
  "en": {
    "title": "Home",
    "subtitle": "Discover parliamentary data",
    "callToAction": "Explore",
    "catchPhrase": "Presentation of the National Assembly, the Bourbon Palace, its members (deputies), its functioning and its news: agenda, work in progress (amendments, reports, commissions, laws), texts and files (legislative or news).",
    "firstSectionTitle": "Representatives by group",
  },
  "fr": {
    "title": "Acceuil",
    "subtitle": "Découvrir les données parlementaires",
    "catchPhrase": "Presentation de l'Assemblee nationale, du palais Bourbon, de ses membres (deputes), de son fonctionnement et de son actualite : agenda, travaux en cours (amendements, rapports, commissions, lois), textes et dossiers (legislatifs ou d'actualite).",
    "callToAction": "Explorer",
    "firstSectionTitle": "Parlementaires par formation politique",
  }
}
</i18n>
