export const toggleMenu = ({commit}, show) => {
    commit('toggleMenu', show)
}

export const startGame = ({commit}) => {
    commit('togglePlaying', true);
    commit('hideScoreboard');
}

export const endGame = ({commit}) => {
    commit('togglePlaying', false);
    commit('toggleScoreboardDetail', true);
}

export const showScoreboard = ({commit}) => {
    commit('togglePlaying', false);
    commit('toggleScoreboardOverview', true);
}