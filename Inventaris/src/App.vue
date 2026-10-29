<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/inventory">Inventory Overview</RouterLink>
    <RouterLink to="/inventory/order">Products that need to be ordered</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>
