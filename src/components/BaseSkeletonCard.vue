<script setup lang="ts"></script>

<template>
  <n-card>
    <template #header>
      <n-skeleton text width="60%" />
    </template>
    <n-skeleton text :repeat="6" />
  </n-card>
</template>
