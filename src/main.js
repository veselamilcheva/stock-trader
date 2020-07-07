import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter);
Vue.filter('currency', (val) => {
  return '$' + val.toLocaleString();
})

const router =  new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
