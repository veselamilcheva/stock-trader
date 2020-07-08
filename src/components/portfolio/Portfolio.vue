<template lang="html">

  <section class="app-portfolio col-md-12 row">
    <app-portfolio-stock v-for="stock in stocks" :stock="stock"></app-portfolio-stock>
  </section>

</template>

<script lang="js">
  import { mapGetters } from 'vuex';
  import Stock from './Stock.vue';

  export default  {
    name: 'app-portfolio',
    props: [],
    mounted () {

    },
    data () {
      return {
        quantity: 0
      }
    },
    methods: {
      
    },
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    },
    components: {
      appPortfolioStock: Stock
    }
}
</script>

<style scoped lang="scss">
  .app-portfolio {

  }
</style>
