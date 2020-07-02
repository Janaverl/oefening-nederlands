import Vue from 'vue'
import Vuex from 'vuex'

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
  mutations: {
    toggleMenu (state, show) {
        state.showMenu = show;
    },
    togglePlaying (state, show) {
        state.playing = show;
    },
    hideScoreboard(state) {
        state.scoreboard.show = false;
    },
    toggleScoreboardOverview (state, show) {
        state.scoreboard.show = show;
        state.scoreboard.detailed = false;
    },
    toggleScoreboardDetail (state, show) {
        state.scoreboard.show = show;
        state.scoreboard.detailed = true;
    },
  },
  actions: {
    toggleMenu ({commit}, show) {
        commit('toggleMenu', show)
    },
    startGame({commit}) {
        commit('togglePlaying', true);
        commit('hideScoreboard');
    },
    endGame({commit}) {
        commit('togglePlaying', false);
        commit('toggleScoreboardDetail', true);
    },
    showScoreboard({commit}) {
        commit('togglePlaying', false);
        commit('toggleScoreboardOverview', true);
    },

  }
})