<script setup lang="ts">
import { h, ref } from "vue";
import { RouterLink } from "vue-router";
import type { MenuOption } from "naive-ui";

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "landing-page",
          },
        },
        { default: () => "Home" }
      ),
    key: "go-to-landing-page",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "deputies-page",
          },
        },
        { default: () => "Deputies" }
      ),
    key: "go-to-deputies-page",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "about-page",
          },
        },
        { default: () => "About" }
      ),
    key: "go-to-about-page",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "not-found-page",
          },
        },
        { default: () => "404" }
      ),
    key: "go-to-not-found-page",
  },
];
const activeKey = ref(null);
</script>

<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
</template>
