<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import _omitBy from "lodash.omitby";

import { useDeputiesQuery } from "@/queries/deputy.js";

const { t } = useI18n();
const router = useRouter();
const route = useRoute();
const searchValue = ref(route.query.q);
const queryParams = computed(() => route.query);
const currentPage = computed(() => Number(route.query._page || 1));
const isFiltersDrawerOpen = ref(false);

const { isError, isLoading, isSuccess, data } = useDeputiesQuery(queryParams);

// TODO: extract to a filter composable
const onFilterChange = (params) => {
  const query = _omitBy(
    {
      ...route.query,
      ...params,
    },
    (value) => [null, undefined, ""].includes(value)
  );

  router.push({ query });
};

const onSearch = (value) => onFilterChange({ q: value, _page: undefined });
const paginate = (page) => onFilterChange({ _page: page });
const clearFilters = () => router.push({ query: {} });
const toggleFilterDrawer = () =>
  (isFiltersDrawerOpen.value = !isFiltersDrawerOpen.value);
const hasActiveFilters = computed(() => Object.keys(route.query).length > 0);
</script>

<template>
  <main>
    <n-page-header :subtitle="t('subtitle')">
      <template #title>{{ t("title") }}</template>
    </n-page-header>
    <n-divider />

    <n-input-group>
      <n-input
        v-model:value="searchValue"
        :loading="isLoading"
        :placeholder="t('placeholder')"
        size="large"
        style="min-width: 50%"
        round
        clearable
        autosize
        @change="onSearch"
        @blur="onSearch($event.target.value)"
      />
      <n-button size="large">
        {{ t("submitButtonLabel") }}
      </n-button>
      <n-button size="large" type="primary" @click="toggleFilterDrawer">
        {{ t("filterButtonLabel") }}
      </n-button>
      <n-collapse-transition :show="hasActiveFilters">
        <n-button size="large" tertiary @click="clearFilters">
          {{ t("clearButtonLabel") }}
        </n-button>
      </n-collapse-transition>
    </n-input-group>

    <n-divider />

    <n-grid cols="1 400:3 800:6" :x-gap="8" :y-gap="8">
      <template v-if="isLoading">
        <n-grid-item v-for="i in 25" :key="i">
          <n-card>
            <template #header>
              <n-skeleton text width="60%" />
            </template>
            <n-skeleton text :repeat="6" />
          </n-card>
        </n-grid-item>
      </template>
      <template v-if="isSuccess">
        <n-grid-item v-for="deputy in data.deputies" :key="deputy.id">
          <DeputyCard v-bind="deputy" />
        </n-grid-item>
      </template>
    </n-grid>

    <n-space v-if="isError">{{ t("error") }}</n-space>

    <n-divider />

    <n-pagination
      v-if="isSuccess"
      :page="currentPage"
      :item-count="data.info.count"
      :default-page-size="25"
      @update:page="paginate"
    />

    <n-drawer v-model:show="isFiltersDrawerOpen" :width="300" placement="left">
      <n-drawer-content :title="t('drawerTitle')">
        <DeputiesFilters @change="onFilterChange" @reset="clearFilters" />
        <template #footer>
          <n-spin v-if="isLoading" />
          <n-h6 v-else-if="isSuccess">
            {{ t("drawerBottomLine", { count: data.info.count }) }}
          </n-h6>
        </template>
      </n-drawer-content>
    </n-drawer>
  </main>
</template>

<i18n>
{
  "en": {
    "title": "Deputies",
    "subtitle": "National assembly representatives",
    "placeholder": "i.e: Jean-Paul ou LR",
    "submitButtonLabel": "Search",
    "filterButtonLabel": "+ More filters",
    "clearButtonLabel": "Clear filters",
    "error": "An error occurred while loading deputies",
    "drawerTitle": "Advanced filters",
    "drawerBottomLine": "No results | One result | {count} resuts",

  },
  "fr": {
    "title": "Parlementaires",
    "subtitle": "Membres de l'Assemblée nationale",
    "placeholder": "i.e: Jean-Paul ou LR",
    "submitButtonLabel": "Rechercher",
    "filterButtonLabel": "+ Plus de filtres",
    "clearButtonLabel": "Effacer les filtres",
    "error": "Une erreur est survenue lors du chargement des parlementaires",
    "drawerTitle": "Filtres avancés",
    "drawerBottomLine": "Aucun résultat | Un résultat | {count} résultats",
  },
}
</i18n>
