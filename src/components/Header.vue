<template lang="html">
  <div class="app-header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Stock-trader</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" tag="li" to="/" activeClass="active"><a class="nav-link">Home</a></router-link>
          <router-link class="nav-item" tag="li" to="/portfolio" activeClass="active"><a class="nav-link">Portfolio</a></router-link>
          <router-link class="nav-item" tag="li" to="/stocks" activeClass="active"><a class="nav-link">Stocks</a></router-link>
        </ul>
        <button type="button" @click="endDay" class="btn btn-info mr-2">End Day</button>
        <button type="button" @click="saveData" class="btn btn-primary mr-2">Save</button>
        <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
      </div>
    </nav>
  </div>

</template>

<script lang="js">
  import { mapActions } from 'vuex';

  export default  {
    name: 'app-header',
    props: [],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
       this.randomizeStocks();
      },
      getData() {
        console.log('init');
        this.fetchData();
      },
      saveData () {
        const data = {
              funds: this.$store.getters.funds,
              stockPortfolio: this.$store.getters.stockPortfolio,
              stocks: this.$store.getters.stocks
            };
            this.$http.put('data.json', data);
      },
    },
    created() {
        this.fetchData();
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
}


</script>

<style scoped lang="scss">
.app-header {
  .nav-item.router-link-exact-active.active {
    background: #ededed;
  }
}
</style>
