import {
    getScoreBoardText,
    getAllExercisesDone
} from '../../assets/functions/dataHandler.js'

const state = {
    allExercises: getAllExercisesDone(),
    text: getScoreBoardText(),
};

const getters = {
    resultAllExercises: state => {
        return state.allExercises;
    },
    scoreBoardText: state => {
        return state.text;
    }
}

export default {
    state,
    getters
}