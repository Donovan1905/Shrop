<template>

      <div class="notification is-primary is-light">
        <div class="columns is-vcentered">
          <div class="column is-11">
                    <p class="is-inline">{{cartItem.title}}</p>
          <div>
            <span class="cart-item--price has-text-info has-text-weight-bold">
              ${{cartItem.price}} X {{cartItem.quantity}}
            </span>
          </div>
          </div>
          <div class="column">
             <button class="button is-danger is-outlined" @click="removeCartItem(cartItem)">
              <span class="icon is-small">
                x
              </span>
            </button>
          </div>
        </div>

        
      </div>

</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'CartListItem',
  props: ['cartItem'],
  methods: {
    ...mapActions([
      'addCartItem',
      'removeCartItem'
    ])
  }
}
</script>