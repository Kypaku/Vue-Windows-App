import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store.js'

const app = new Vue({
  el: '#app',
  store,
  template: '<app/>',
  components: { App }
})
