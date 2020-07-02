import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showMenu: false,
    playing: true,
    scoreboard: {
        show: false,
        detailed: false
    }
  },
  getters,
  mutations,
  actions
})