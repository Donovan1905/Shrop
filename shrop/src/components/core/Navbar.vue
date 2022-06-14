<template>
    <nav class="navbar has-background-success-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://localhost:8080/#/inventory">
          <img src="../../assets/shroplogo.jpg" width="112" height="112">
        </a>
        <a class="navbar-item has-text-light">Get out of my swamp Grrrrrrreeeeeeee !!!!</a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/inventory" class="button is-primary">
               <strong> Inventory</strong>
              </router-link>
              <router-link to="/cart"  class="button is-warning">   <p>
    Total cart items:
    <span> {{cartQuantity}}</span> </p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
import {mapGetters} from "vuex"
export default {
    name: "Navbar",
    computed: {
    ...mapGetters([
      'cartQuantity'
    ])
  },
  created() {
    this.$store.dispatch("getCartItems");
  }
}
</script>