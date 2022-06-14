<template>
    <div class="card has-text-centered has-background-success-light">
      <header class="card-header">
        <p class="is-size-3 ml-4">
          <b>{{ productItem.title }}</b>
        </p>
      </header>
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="require(`@/assets/${productItem.image_tag}`)" alt="">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <hr>
          <br />
          <p class="mt-4">
            {{ productItem.description }}
          </p>
        </div>
        <div class="tags has-addons content">
          <span class="tag">Price</span>
          <span class="tag is-primary">{{ productItem.price }}</span>
        </div>
      </div>
      <div class="card-footer ">
        <div class="media">
            <a class="card-footer-item " @click="addCartItem(productItem)">
              <strong>Add to Cart</strong>
            </a>
        </div>
      </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: "ProductListItem",
  props: ["productItem"],
  methods: {
    ...mapActions(["addCartItem"]),
    getImgUrl(name) {
        var images = require.context('../../assets/', false, /\.png$/)
        return images('./' + name)
    }
  },
};
</script>
