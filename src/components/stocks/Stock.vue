<template lang="html">
  <section class="app-stock col-md-4"> 
    <div class="card mt-4 mr-4">
      <div class="card-header">
        <h3 class="panel-title">{{ stock.name }}
          <small>price:({{ stock.price }}) </small>
        </h3>
      </div>
      <div class="card-body d-flex justify-content-center align-items-center row">
        <div class="mr-2">
          <input type="numebr" calss="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div>
          <button class="btn btn-success" @click="buyStock" :disabled="quantity <= 0">Buy</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'app-stock',
    props: ['stock'],
    mounted () {

    },
    data () {
      return {
        quantity: 0
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .app-stock {

  }
</style>
