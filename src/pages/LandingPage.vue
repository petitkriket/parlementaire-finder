<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <main>
    <n-page-header subtitle="Discover french deputees">
      <template #title> This is a Landing Page </template>
    </n-page-header>

    <n-divider />

    <section>
      <n-space justify="space-around">
        <span>
          Ut lobortis mattis nisl sit amet viverra. Aenean congue tellus ut
          rhoncus viverra. Curabitur id eleifend risus. Donec placerat eros id
          nunc tincidunt efficitur. Maecenas ac arcu quis mi semper tincidunt in
          et felis. Ut sed urna consequat, aliquam nulla ut, laoreet nunc.
          Maecenas placerat dictum neque.
        </span>

        <n-button
          size="large"
          type="primary"
          @click="router.push({ name: 'deputees-page' })"
        >
          Explore
        </n-button>
      </n-space>
    </section>
    <n-divider />

    <section>
      <n-space>
        <OrganizationCard v-for="i in 5" :key="i"> </OrganizationCard>
      </n-space>
    </section>
    <n-divider />
  </main>
</template>
