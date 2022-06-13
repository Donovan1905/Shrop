import { createStore } from 'vuex'
import product from './modules/products/index.ts';
import cart from './modules/cart/index.ts';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    product,
    cart
  }
})
