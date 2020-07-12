export const toggleMenu = ({commit}, show) => {
    commit('toggleMenu', show)
}

export const startGame = ({commit}) => {
    commit('togglePlaying', true);
    commit('hideScoreboard');
}

export const showScoreboard = ({commit}) => {
    commit('togglePlaying', false);
    commit('toggleScoreboardOverview', true);
}

export const showScoreboardDetail = ({commit}) => {
    commit('togglePlaying', false);
    commit('toggleScoreboardDetail', true);
}