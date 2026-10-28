// De routes voor het Inventory-domein

import Overview from './pages/Overview.vue'
import Create from './pages/Create.vue'
// import Edit from './pages/Edit.vue'

const routes = [
  { path: '/',  redirect: '/inventory' },
  { path: '/inventory', component: Overview, name: 'inventory.overview' },
  { path: '/inventory/create', component: Create, name: 'inventory.create'  },
//   { path: '/groceries/edit/:id', component: Edit, name: 'groceries.edit'  },
]

export default routes;