import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store';

Vue.config.productionTip = false

export const ContentEventBus = new Vue();
export const MarkUpEventBus = new Vue();

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
