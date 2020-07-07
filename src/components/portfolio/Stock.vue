<template lang="html">

  <section class="app-portfolio-stock col-md-4">
    <div class="card mt-4 mr-4">
      <div class="card-header">
        <h3 class="panel-title">{{ stock.name }}
          <small>Price:({{ stock.price }}) | Quantity: ({{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="card-body d-flex justify-content-center align-items-center row">
        <div class="input-holder">
          <input :class="{'danger': insufficientQuantity}" type="text" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div>
          <button 
          class="btn btn-success" 
          @click="sellStock" :disabled="insufficientQuantity || quantity <= 0 || quantity % 1 !== 0">
          {{ insufficientQuantity ? 'Not enough stocks' : 'Sell' }}
          </button>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  import { mapActions } from 'vuex';

  export default  {
    name: 'app-portfolio-stock',
    props: ['stock'],
    mounted () {

    },
    data () {
      return {
        quantity: 0
      }
    },
    methods: {
      ...mapActions([
        'placeSellOrder'
      ]),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.placeSellOrder(order);
        this.quantity = 0;
      }
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      }
    }
}
</script>

<style scoped lang="scss">
  .app-portfolio-stock {
    .input-holder {
      margin: 16px 16px 16px 0;
    }
    .danger {
      border: 2px solid rgb(196, 52, 52);
    }
    @media only screen and (max-width: 1070px) {
      .input-holder {
        margin: 16px 16px 16px 16px;
      }
    }
  }
</style>
