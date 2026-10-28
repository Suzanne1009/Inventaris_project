<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/inventory">Inventory Overview</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>
