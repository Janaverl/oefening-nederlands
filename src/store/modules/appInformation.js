import {
    getAppTitle,
    getAppCreatedBy
  } from '../../assets/functions/dataHandler.js';

const state = {
    appTitle: getAppTitle(),
    createdBy: getAppCreatedBy()
};

const getters = {
    appTitle: state => {
        return state.appTitle;
    },
    createdBy: state => {
        return state.createdBy;
    }
}

export default {
    state,
    getters
}