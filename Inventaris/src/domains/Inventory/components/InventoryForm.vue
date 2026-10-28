//Invoerformulier voor toevoegen van producten

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
    product: Object,
})

//Voor nieuw product
const tempProduct = ref({...props.product});


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
        <input v-model="tempProduct.actualAmount" type="number"  min="0" step="1" placeholder="Current Amount">
        <input v-model="tempProduct.minimumAmount" type="number" placeholder="Minimum amount">
    </div>
    <div>
        <RouterLink :to="`/`"> <!-- Als je op de submit knop drukt, ga je weer naar de overview pagina-->
            <button @click="emitEvent">Add</button>
        </RouterLink>
        <RouterLink :to="`/`"> <!-- Als je op de submit knop drukt, ga je weer naar de overview pagina-->
            <button>Cancel</button>
        </RouterLink>
        
    </div>


</template>