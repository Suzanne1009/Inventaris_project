import { ref, computed } from 'vue'

//State
export type Product = { id: number, name: string, actualAmount: number, minimumAmount: number}

const products= ref<Product[]>([
    {id: 1, name: "Pennen", actualAmount: 6, minimumAmount: 5},
    {id: 2, name: "Notitieblokken", actualAmount: 3, minimumAmount: 5},
    {id: 3, name: "Labels", actualAmount: 3, minimumAmount: 5},
    {id: 4, name: "Potloden", actualAmount: 7, minimumAmount: 5},
    {id: 5, name: "Gummen", actualAmount: 6, minimumAmount: 5},
    {id: 6, name: "Puntenslijpers", actualAmount: 3, minimumAmount: 5},
    {id: 7, name: "Linealen", actualAmount: 3, minimumAmount: 5},
])


//Getters
export const getAllProducts = computed<Product[]>(() => products.value); 
export const getProductById = (id:number) => computed<Product | undefined>(() => products.value.find(product => product.id === id));
export const idCount = ref(Math.max(0, ...getAllProducts.value.map(product => product.id))) //Om het hoogste id nummer uit de lijst te halen

//Actions
export const addProduct = (product: Product) => {
  products.value.push({...product, id: ++idCount.value}); //Toevoegen van nieuw product
}

export const updateInventory = (product: Product) => {
  const item = getProductById(product.id);

  if (!item.value) return; //Checken of product bestaat

  item.value.name = product.name;
  item.value.actualAmount = product.actualAmount;
  item.value.minimumAmount = product.minimumAmount;
};

export const belowMinimum = computed<Product[]>(() => {
  return products.value.filter(product => product.actualAmount < product.minimumAmount)
})

