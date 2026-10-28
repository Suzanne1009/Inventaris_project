import { createRouter, createWebHistory } from 'vue-router'
import routes from '../domains/Inventory/routes.js'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})