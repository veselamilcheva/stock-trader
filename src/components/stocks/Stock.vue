<template lang="html">
  <section class="app-stock col-md-4"> 
    <div class="card mt-4 mr-4">
      <div class="card-header">
        <h3 class="panel-title">{{ stock.name }}
          <small>price:({{ stock.price }}) </small>
        </h3>
      </div>
      <div class="card-body d-flex justify-content-center align-items-center row">
        <div class="input-holder">
          <input :class="{'danger': insufficientFunds}" type="text" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div>
          <button class="btn btn-success" 
          @click="buyStock" :disabled="insufficientFunds || quantity <= 0 || quantity % 1 !== 0">
          {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
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
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds; 
      }
    }
}


</script>

<style scoped lang="scss">
  .app-stock {
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
