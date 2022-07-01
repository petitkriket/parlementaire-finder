<script setup lang="ts">
import { ref } from "vue";
const query = ref("");
const isDrawerOpen = ref(false);

const toggleFilters = () => (isDrawerOpen.value = !isDrawerOpen.value);
</script>

<template>
  <main>
    <n-page-header subtitle="National assembly representatives">
      <template #title>Deputees</template>
    </n-page-header>
    <n-divider />

    <n-input-group>
      <n-auto-complete
        v-model:value="query"
        :input-props="{
          autocomplete: 'disabled',
        }"
        :options="[]"
        placeholder="Name or party"
      />
      <n-button type="primary"> Search </n-button>
    </n-input-group>

    <n-button @click="toggleFilters">More filters</n-button>

    <n-divider />

    <n-space>
      <DeputyCard v-for="i in 20" :key="i"> </DeputyCard>
    </n-space>

    <n-divider />

    <n-pagination :total="100" :page-size="20" :current="1" />

    <n-drawer v-model:show="isDrawerOpen" :width="502" placement="left">
      <n-drawer-content title="Filters">
        <DeputeesFilters />
      </n-drawer-content>
    </n-drawer>
  </main>
</template>
