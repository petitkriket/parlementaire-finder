<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

import { useOrganizationsQuery } from "@/queries/organization.js";
import sampleSize from "lodash.samplesize";

const router = useRouter();
const { isError, isLoading, isSuccess, data } = useOrganizationsQuery({
  active: true,
});

const sample = computed(() =>
  data?.value?.organizations ? sampleSize(data.value.organizations, 5) : []
);
</script>

<template>
  <main>
    <n-page-header subtitle="Discover french representatives">
      <template #title> This is a Landing Page </template>
    </n-page-header>

    <n-divider />

    <section
      class="flex items-center justify-around bg-stone-100 rounded-xl p-14"
    >
      <span class="w-1/2">
        Ut lobortis mattis nisl sit amet viverra. Aenean congue tellus ut
        rhoncus viverra. Curabitur id eleifend risus. Donec placerat eros id
        nunc tincidunt efficitur. Maecenas ac arcu quis mi semper tincidunt in
        et felis.
      </span>

      <n-button
        size="large"
        type="primary"
        @click="router.push({ name: 'deputies-page' })"
      >
        Explore
      </n-button>
    </section>

    <n-divider />

    <section>
      <n-h2>By Group</n-h2>
      <n-grid cols="1 400:3 800:5" :x-gap="8" :y-gap="8" v-if="isSuccess">
        <n-grid-item v-for="organization in sample" :key="organization.id">
          <OrganizationCard v-bind="organization" />
        </n-grid-item>
      </n-grid>
    </section>
    <n-divider />
  </main>
</template>
