<!-- Toont een overzicht van de boodschappenlijst -->

<script setup lang="ts">
import InventoryTable from '../../../components/Inventory_table.vue'
import { getAllProducts } from '../../Inventory/store.js';


</script>

<template>
  <InventoryTable :products="getAllProducts" />
</template>