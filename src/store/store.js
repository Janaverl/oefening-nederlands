import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showMenu: false
  },
  mutations: {
    toggleMenu (state, show) {
      state.showMenu = show;
    }
  }
})