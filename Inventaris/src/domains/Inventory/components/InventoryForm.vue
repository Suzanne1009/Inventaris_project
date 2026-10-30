//Invoerformulier voor toevoegen van producten

<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '../store';

const props = defineProps<{ //Zou naam props nog kunnen veranderen naar duidelijkere naam net zoals in Inventory table
  product: Product
}>()

const tempProduct = ref({ ...props.product })

const emit = defineEmits(['submit']);

const emitEvent = () => { //Als je op submit drukt, gebeurt dit
    emit('submit', {
        id: tempProduct.value.id,
        name: tempProduct.value.name,
        actualAmount: tempProduct.value.actualAmount,
        minimumAmount: tempProduct.value.minimumAmount
    })
}
</script>


<template>
    <div>
        <input v-model="tempProduct.name" placeholder="Product">
        <input v-model.number="tempProduct.actualAmount" type="number"  min="0" step="1" placeholder="Current Amount">
        <input v-model.number="tempProduct.minimumAmount" type="number" placeholder="Minimum amount">
    </div>
    <div>
        <!--In emitEvent de redirect naar de homepagina-->
        <RouterLink :to="`/`"> <!-- Als je op de submit knop drukt, ga je weer naar de overview pagina-->
            <button @click="emitEvent">{{ props.product?.id ? 'Change' : 'Add'}}</button> <!--Als product bestaand Id heeft, dan komt er Change te staan, anders Add-->
        </RouterLink>

        <RouterLink :to="`/`"> <!-- Als je op de submit knop drukt, ga je weer naar de overview pagina-->
            <button>Cancel</button>
        </RouterLink>
        
    </div>
</template>