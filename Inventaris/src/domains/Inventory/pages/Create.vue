//Voor het toevoegen van producten

<script setup lang="ts">
import InventoryForm from '../components/InventoryForm.vue';
import { addProduct } from '../store.ts'; //Haalt de addProduct functie op uit de store

const product = { id: 0, name: '', actualAmount: 0, minimumAmount: 0 };

</script>

<template>
    <!-- Als er op submit wordt gedrukt wordt de nieuwe product toegevoegd aan de array -->
    <InventoryForm :product="product" @submit="addProduct"/> <!-- doorgeven van product als prop aan het Inventoryform component-->
</template>

