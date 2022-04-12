import Vue from 'vue'
import App from './App.vue'
//import Ninjas from './Ninjas.vue'
//import Yogas from './Yogas.vue'
import Togas from './Togas.vue';

//Vue.component('ninjas', Ninjas);
//Vue.component('yogas', Yogas);
Vue.component('togas', Togas);

new Vue({
  el: '#app',
  render: h => h(App)
})
