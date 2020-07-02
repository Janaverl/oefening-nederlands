import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showMenu: false,
    playing: true,
    showAllResults: false
  },
  mutations: {
    toggleMenu (state, show) {
        state.showMenu = show;
    },
    togglePlaying (state, show) {
        state.playing = show;
    },
    toggleScoreboard (state, show) {
        state.showAllResults = show;
    }
  },
  actions: {
    toggleMenu ({commit}, show) {
        commit('toggleMenu', show)
    },
    startGame({commit}) {
        commit('togglePlaying', true);
        commit('toggleScoreboard', false);
    },
    endGame({commit}) {
        commit('togglePlaying', false);
        commit('toggleScoreboard', false);
    },
    showScoreboard({commit}) {
        commit('togglePlaying', false);
        commit('toggleScoreboard', true);
    },

  }
})