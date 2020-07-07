<template lang="html">

  <section class="app-portfolio-stock col-md-4">
    <div class="card mt-4 mr-4">
      <div class="card-header">
        <h3 class="panel-title">{{ stock.name }}
          <small>Price:({{ stock.price }}) | Quantity: ({{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="card-body d-flex justify-content-center align-items-center row">
        <div class="mr-2">
          <input type="numebr" calss="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div>
          <button class="btn btn-success" @click="sellStock" :disabled="quantity <= 0">Sell</button>
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

    }
}
</script>

<style scoped lang="scss">
  .app-portfolio-stock {

  }
</style>
