<template>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h4>{{ productItem.title }}</h4>
          <img :src="require(`@/assets/${productItem.image_tag}`)" alt="">

          <hr>
          <br />
          <p class="mt-4">
            {{ productItem.description }}
          </p>
        </div>
        <div class="media">
          <a
            class="button is-rounded is-pulled-left"
            @click="addCartItem(productItem)"
          >
            <strong>Add to Cart</strong>
          </a>
          <div class="media-right">
            <a class="button is-primary is-light">
              <strong>$ {{ productItem.price }}</strong>
            </a>
          </div>
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