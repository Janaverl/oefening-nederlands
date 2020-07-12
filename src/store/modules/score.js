import {
    getScoreBoardText,
    getAllExercisesDone,
    postExerciseResult
} from '../../assets/functions/dataHandler.js'

const state = {
    allExercises: getAllExercisesDone(),
    text: getScoreBoardText(),
    exerciseDetailsShowing: {
        date: null,
        score: null,
        total: null,
        percentage: null,
        exercises: {},
        description: {}
    }
};

const getters = {
    resultAllExercises: state => {
        return state.allExercises;
    },
    scoreBoardText: state => {
        return state.text;
    },
    exerciseDetailsShowing: state => {
        return state.exerciseDetailsShowing;
    }
}

const mutations = {
    showDetails: (state, payload) => {
        state.exerciseDetailsShowing = payload;
    },
    addScore: (state, payload) => {
        postExerciseResult(payload);
        state.allExercises.unshift(payload)
    }
}

const actions = {
    showDetails: ({ commit }, payload) => {
        commit('showDetails', payload);
        commit('togglePlaying', false);
        commit('toggleScoreboardDetail', true);
    },
    saveExercise: ({ commit }, payload) => {
        commit('addScore', payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}