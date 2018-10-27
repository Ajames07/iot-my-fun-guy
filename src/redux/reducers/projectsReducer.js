import {combineReducers} from 'redux';

const currentProjects = (state = [], action ) => {
    switch(action.type) {
        case 'SET_ALL_CURRENT_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

const previousProjects = (state = [], action) => {
    switch(action.type) {
        case 'SET_ALL_PREVIOUS_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    currentProjects,
    previousProjects,
});