<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <main>
    <n-page-header subtitle="Discover french representatives">
      <template #title> This is a Landing Page </template>
    </n-page-header>

    <n-divider />

    <section>
      <div
        class="flex items-center justify-around bg-stone-100 rounded-xl p-14"
      >
        <span class="w-[50%]">
          Ut lobortis mattis nisl sit amet viverra. Aenean congue tellus ut
          rhoncus viverra. Curabitur id eleifend risus. Donec placerat eros id
          nunc tincidunt efficitur. Maecenas ac arcu quis mi semper tincidunt in
          et felis.
        </span>

        <n-button
          size="large"
          type="primary"
          @click="router.push({ name: 'deputees-page' })"
        >
          Explore
        </n-button>
      </div>
    </section>
    <n-divider />

    <section>
      <n-h2>Main groups</n-h2>

      <n-space>
        <OrganizationCard v-for="i in 5" :key="i"> </OrganizationCard>
      </n-space>
    </section>
    <n-divider />
  </main>
</template>
