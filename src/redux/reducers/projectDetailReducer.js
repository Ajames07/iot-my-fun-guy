import { combineReducers } from 'redux';


const singleProject = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECT_DETAILS':
            return action.payload;
        default:
            return state;
    }
} 

const projectNotes = (state = [], action) => {
    switch(action.type) {
        case 'SET_PROJECT_NOTES':
            return action.payload;
        default: 
            return state;
    }
}

export default combineReducers({
    singleProject,
    projectNotes,
});