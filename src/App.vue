<template>
  <div id="app">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12">
        <transition name="slide" mode="out-in"> <!-- animate first route out before it starts the new one -->
          <router-view></router-view>
        </transition>
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    appHeader: Header
  },
  created() { //like onInit
    this.$store.dispatch('initStocks'); //dispatch the action
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
