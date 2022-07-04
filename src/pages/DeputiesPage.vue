<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import _omitBy from "lodash.omitby";

import { useDeputiesQuery } from "@/queries/deputy.js";

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
    <n-page-header subtitle="National assembly representatives">
      <template #title>Deputies</template>
    </n-page-header>
    <n-divider />

    <n-input-group>
      <n-input
        v-model:value="searchValue"
        :loading="isLoading"
        placeholder="Filter by name or party"
        size="large"
        style="min-width: 50%"
        round
        clearable
        autosize
        @change="onSearch"
        @blur="onSearch($event.target.value)"
      />
      <n-button type="primary" size="large">Search</n-button>
      <n-button size="large" @click="toggleFilterDrawer">More filters</n-button>
      <n-collapse-transition :show="hasActiveFilters">
        <n-button type="tertiary" size="large" @click="clearFilters">
          Clear
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

    <n-space v-if="isError">Something is off..</n-space>

    <n-divider />

    <n-pagination
      v-if="isSuccess"
      :page="currentPage"
      :item-count="data.info.count"
      :default-page-size="25"
      @update:page="paginate"
    />

    <n-drawer v-model:show="isFiltersDrawerOpen" :width="300" placement="left">
      <n-drawer-content title="Filters">
        <DeputiesFilters @change="onFilterChange" @reset="clearFilters" />
      </n-drawer-content>
    </n-drawer>
  </main>
</template>
