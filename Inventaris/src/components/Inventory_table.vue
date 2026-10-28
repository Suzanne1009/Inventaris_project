<script setup lang="ts">
type product =  {id: number, name: string, actualAmount: number, minimumAmount: number}

const {products} = defineProps<{products: product[]}>() //Haal producten uit overview.vue

</script>

<template>
 <h1>Inventory</h1>
 <table>
  <thead>
      <tr>
        <th>Id</th>
        <th>Product</th>
        <th>Current amount</th>
        <th>Minimum amount needed</th>
      </tr>    
  </thead>
  
  <tbody>
    <tr v-for="product in products" :key="product.id">
      <td>{{ product.id }}</td>
      <td>{{ product.name }}</td>
      <td><input v-model= "product.actualAmount" type="number" min="0" step="1" placeholder="Current amount"></td>
      <td>{{ product.minimumAmount}}</td>
    </tr>
  </tbody>
 </table>
 <button><RouterLink to="/inventory/create">Add a new product</RouterLink></button> <!--Knop voor het toevoegen van nieuwe producten, gaat naar create pagina -->
</template>

<style>
</style>