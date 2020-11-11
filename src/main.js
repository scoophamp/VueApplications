import Vue from 'vue';
import App from './App.vue';
import store from './store';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faDog } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import {  FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
 
// Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.component('font-awesome-layers', FontAwesomeLayers)
// Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
// library.add(faDog)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
