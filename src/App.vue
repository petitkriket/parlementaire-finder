<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/deputees">Deputees</RouterLink>
        <RouterLink to="/deputees/1">Deputy 1</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/404">404</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
