import { ref, computed } from 'vue'

//State
type product =  {id: number, name: string, actualAmount: number, minimumAmount: number}

const products= ref<product[]>([
    {id: 1, name: "Pennen", actualAmount: 3, minimumAmount: 5},
    {id: 2, name: "Notitieblokken", actualAmount: 3, minimumAmount: 5},
    {id: 3, name: "Labels", actualAmount: 3, minimumAmount: 5},
    {id: 4, name: "Potloden", actualAmount: 3, minimumAmount: 5},
    {id: 5, name: "Gummen", actualAmount: 3, minimumAmount: 5},
    {id: 6, name: "Puntenslijpers", actualAmount: 3, minimumAmount: 5},
    {id: 7, name: "Linealen", actualAmount: 3, minimumAmount: 5},
])


//Getters
export const getAllProducts = computed<product[]>(() => products.value); 
export const getInventoryById = (id:number) => computed<product | undefined>(() => products.value.find(product => product.id === id));
export const idCount = ref(Math.max(0, ...getAllProducts.value.map(product => product.id))) //Om het hoogste id nummer uit de lijst te halen

//Actions
export const addProduct = (product: product) => {
  products.value.push({...product, id: ++idCount.value}); //Toevoegen van nieuwe product
}