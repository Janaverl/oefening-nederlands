import {
    getMenuName,
    getMenuItems
  } from '../../assets/functions/dataHandler.js';

const state = {
    menuName: getMenuName(),
    menuItems: getMenuItems()
};

const getters = {
    menuName: state => {
        return state.menuName;
    },
    menuItems: state => {
        return state.menuItems;
    }
}

export default {
    state,
    getters
}