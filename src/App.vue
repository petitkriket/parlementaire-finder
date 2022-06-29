<script setup lang="ts"></script>

<template>
  <div style="height: 100vh; position: relative">
    <n-layout position="absolute">
      <n-layout-header bordered :style="{ padding: '8px 40px' }">
        <TheNavBar />
      </n-layout-header>

      <n-layout-content bordered :content-style="{ padding: '8px 55px' }">
        <RouterView />
      </n-layout-content>

      <n-layout-footer bordered :style="{ padding: '8px 40px' }">
        <TheFooter />
      </n-layout-footer>
    </n-layout>
  </div>
</template>
