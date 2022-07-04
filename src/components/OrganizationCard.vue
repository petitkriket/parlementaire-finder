<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps({
  name: {
    type: String,
  },
  acronym: {
    type: String,
  },
});

const { name, acronym } = toRefs(props);
</script>

<template>
  <n-card :title="name" embedded>
    <template #cover>
      <div class="bg-neutral-200">
        <router-link
          :to="{
            name: 'deputies-page',
            query: { organizationAcronym: acronym },
          }"
        >
          <img
            src="https://dummyimage.com/200x600/f1f1f1/aaa"
            class="object-cover h-[200px]"
          />
        </router-link>
      </div>
    </template>

    <router-link
      :to="{
        name: 'deputies-page',
        query: { organizationAcronym: acronym },
      }"
      class="no-underline text-inherit"
    >
      <n-button type="primary" quaternary> See representatives</n-button>
    </router-link>
  </n-card>
</template>
