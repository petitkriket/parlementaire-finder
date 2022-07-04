<script setup>
import { toRefs } from "vue";
// import type { Deputy } from "@/types";
// const props = defineProps<Deputy>();

const props = defineProps({
  id: {
    type: Number,
  },
  fullName: {
    type: String,
  },
  organizationAcronym: {
    type: String,
  },
  slug: {
    type: String,
  },
});

const { id, fullName, organizationAcronym, slug } = toRefs(props);
</script>

<template>
  <n-card :title="fullName" size="small">
    <template #cover>
      <div class="bg-neutral-100 h-[200px]">
        <router-link :to="{ name: 'deputy-page', params: { id } }">
          <img
            :src="`https://www.nosdeputes.fr/depute/photo/${slug}/400`"
            class="object-cover object-top h-[200px] transition-all duration-500 ease-in-out transform hover:scale-100 scale-105 grayscale"
          />
        </router-link>
      </div>
    </template>

    <n-tag round>
      {{ organizationAcronym }}
    </n-tag>
  </n-card>
</template>
