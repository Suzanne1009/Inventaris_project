// De routes voor het Inventory-domein

import Overview from './pages/Overview.vue'
import Create from './pages/Create.vue'
import Edit from './pages/Edit.vue'
import Order from './pages/Order.vue'

const routes = [
  { path: '/',  redirect: '/inventory' },
  { path: '/inventory', component: Overview, name: 'inventory.overview' },
  { path: '/inventory/create', component: Create, name: 'inventory.create'  },
  { path: '/inventory/edit/:id', component: Edit, name: 'inventory.edit' },
  { path: '/inventory/order', component: Order, name: 'inventory.order'}
]

export default routes;