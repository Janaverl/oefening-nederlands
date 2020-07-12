import {
    getScoreBoardText,
    getAllExercisesDone,
    postExerciseResult
} from '../../assets/functions/dataHandler.js'

const newExercise = () => {
    return {
        date: null,
        score: null,
        total: null,
        percentage: null,
        exercises: {},
        description: {}
    }
}

const state = {
    allExercises: getAllExercisesDone(),
    text: getScoreBoardText(),
    currentExercise: newExercise()
};

const getters = {
    resultAllExercises: state => {
        return state.allExercises;
    },
    scoreBoardText: state => {
        return state.text;
    },
    currentExercise: state => {
        return state.currentExercise;
    }
}

const mutations = {
    showDetails: (state, payload) => {
        state.currentExercise = payload;
    },
    resetCurrentExerciseState (state) {
        state.currentExercise = newExercise();
    },
    addScore: (state, payload) => {
        postExerciseResult(payload);
        state.allExercises.unshift(payload)
    }
}

const actions = {
    showDetails: ({ commit }, payload) => {
        commit('showDetails', payload);
    },
    resetCurrentExerciseState ({ commit }) {
        commit('resetCurrentExerciseState');
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