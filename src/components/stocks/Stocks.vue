<template lang="html">

  <section class="app-stocks col-md-12 row">
    <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
  </section>

</template>

<script lang="js">
  import Stock from './Stock.vue'

  export default  {
    name: 'app-stocks',
    props: [],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {

    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    },
    components: {
      appStock: Stock
    }
}


</script>

<style scoped lang="scss">
  .app-stocks {

  }
</style>
