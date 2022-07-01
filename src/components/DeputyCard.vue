<script setup>
// import type { Deputy } from "@/types";
// const props = defineProps<Deputy>();

const props = defineProps({
  id: {
    type: String,
    default: "1",
  },
});
</script>

<template>
  <n-card title="A Deputy" size="small">
    <template #cover>
      <div class="bg-neutral-200">
        <router-link :to="{ name: 'deputy-page', params: { id: props.id } }">
          <img
            src="https://dummyimage.com/200x200/f1f1f1/aaa"
            class="object-cover h-[200px]"
          />
        </router-link>
      </div>
    </template>

    <template #action>
      <router-link
        :to="{ name: 'deputy-page', params: { id: props.id } }"
        class="no-underline text-inherit"
      >
        <n-button type="primary" quaternary>See</n-button>
      </router-link>
    </template>
  </n-card>
</template>
