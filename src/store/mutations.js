export const toggleMenu = (state, show) => {
    state.showMenu = show;
}

export const togglePlaying = (state, show) => {
    state.playing = show;
}

export const hideScoreboard = (state) => {
    state.scoreboard.show = false;
}
    
export const toggleScoreboardOverview = (state, show) => {
    state.scoreboard.show = show;
    state.scoreboard.detailed = false;
}
    
export const toggleScoreboardDetail = (state, show) => {
    state.scoreboard.show = show;
    state.scoreboard.detailed = true;
}
  