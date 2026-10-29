<script setup lang="ts">
import type { Product }  from '../domains/Inventory/store'

const {products} = defineProps<{products: Product[]}>() //Haal producten uit overview.vue

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
      <td>
        <RouterLink :to="`inventory/edit/${product.id}`"> <!-- Edit knop die leidt naar edit pagina per product id-->
          <button>Edit</button> 
        </RouterLink>
      </td>

    </tr>
  </tbody>
 </table>
 <button><RouterLink to="/inventory/create">Add a new product</RouterLink></button> <!--Knop voor het toevoegen van nieuwe producten, gaat naar create pagina -->
</template>

<style>

table {
  border-collapse: collapse;
  width: 100%;
  table-layout: auto !important;
  word-wrap: break-word;
  text-align: left;
}

td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid rgb(224, 242, 237);
}

th {
  padding: 24px;
  text-align: left;
  border-bottom: 2px solid black;

}

h1 {
    font-style:italic;
}

h2 {
    font-style:italic;
    padding: 2%;
}

button {
  background-color: lightblue;
  border: none;
  color: black;
  padding: 7px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
}

a:link {
  text-decoration: none;
  padding: 5%;

}

a:visited {
  color: brown;

}


</style> 
