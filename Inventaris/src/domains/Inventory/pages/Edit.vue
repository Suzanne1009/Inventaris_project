<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import InventoryForm from '../components/InventoryForm.vue';

import { updateInventory, getProductById } from '../store'; //Haalt de update en ID functie op uit de store

const route = useRoute()
const productId = computed(() => Number(route.params.id))

const item = getProductById(productId.value)

</script>

<template>
<InventoryForm v-if="item" :product="item" @submit="updateInventory"/> <!--doorgeven van geselecteerde item (als er een item is) naar Inventoryform en uitvoeren update Inventory-->
<p v-else>Product not found</p>

</template>

