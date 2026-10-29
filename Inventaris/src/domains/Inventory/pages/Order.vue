<script setup lang="ts">
import { belowMinimum } from '../store';

const products = belowMinimum //Krijg alleen de producten waarvan aantal onder minimum ligt

</script>

<template>
<h2>Products below minimum stock level</h2>

  <p v-if="belowMinimum.length === 0">
    There are no products below the minimum stock level.
  </p>

<table v-else>
<thead>
      <tr>
        <th>Product</th>
        <th>Current stock</th>
        <th>Minimum</th>
      </tr>    
  </thead>
  
  <tbody>
    <tr v-for="product in products" :key="product.id">
      <td>{{ product.name }}</td>
      <td>{{ product.actualAmount }}</td>
      <td>{{ product.minimumAmount}}</td>
    </tr>
  </tbody>
 </table>
</template>