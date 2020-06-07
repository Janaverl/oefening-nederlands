import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const ExerciseEventBus = new Vue();
export const ContentEventBus = new Vue();
export const MarkUpEventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
