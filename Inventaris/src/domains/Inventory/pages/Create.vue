//Voor het toevoegen van producten

<script setup lang="ts">
import InventoryForm from '../components/InventoryForm.vue';
import { addProduct } from '../store.ts'; //Haalt de addGrocery functie op uit de store

const product = { id: 0, name: '', actualAmount: 0, minimumAmount: 0 };

</script>

<template>
    <!-- Als er op submit wordt gedrukt wordt de nieuwe grocery toegevoegd aan de array -->
    <InventoryForm :product="product" @submit="addProduct"/> <!-- doorgeven van grocery als prop aan het groceryform component-->
</template>

