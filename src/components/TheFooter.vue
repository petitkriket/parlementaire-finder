<script setup lang="ts">
import { h, ref } from "vue";
import { RouterLink } from "vue-router";
import type { MenuOption } from "naive-ui";

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        "a",
        {
          href: "https://github.com/regardscitoyens/nosdeputes.fr/blob/master/doc/opendata.md",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        "OpenData Source"
      ),
    key: "go-to-data-source",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "terms-of-use-page",
          },
        },
        { default: () => "Terms of Use" }
      ),
    key: "go-to-about-page",
  },
];
const activeKey = ref(null);
</script>

<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
</template>
