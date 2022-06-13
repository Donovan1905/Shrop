import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartList from '../components/cart/Cart_List.vue';
import ProductList from '../components/product/Product_List.vue'

const routes = [
  {
    path: '/inventory',
    component: ProductList
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/',
    redirect: '/inventory'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
