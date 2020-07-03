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
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>

</template>

<script lang="js">

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

    },
    computed: {

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
