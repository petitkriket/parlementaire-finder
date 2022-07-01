<script setup lang="ts">
const props = defineProps({
  acronym: {
    type: String,
    default: "polpat",
  },
});
</script>

<template>
  <n-card title="An Organization">
    <template #cover>
      <div class="bg-neutral-200">
        <router-link
          :to="{
            name: 'deputees-page',
            query: { organization: props.acronym },
          }"
        >
          <img
            src="https://dummyimage.com/200x600/f1f1f1/aaa"
            class="object-cover h-[200px]"
          />
        </router-link>
      </div>
    </template>
    <span>Political party description</span>

    <template #action>
      <router-link
        :to="{ name: 'deputees-page', query: { organization: props.acronym } }"
        class="no-underline text-inherit"
      >
        <n-button type="primary" quaternary> See representatives</n-button>
      </router-link>
    </template>
  </n-card>
</template>
