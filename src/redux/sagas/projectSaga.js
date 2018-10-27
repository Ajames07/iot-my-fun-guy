import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* addProject(action) {
    console.log(action.payload);
    yield call(axios.post, '/api/project/add', action.payload);
}

function* getCurrentProjects() {
    try {
        const currentProjects = yield call(axios.get, 'api/project/current');
        yield put({type: 'SET_ALL_CURRENT_PROJECTS', payload: currentProjects.data}); 
    } catch (error) {
        console.log('ERROR', error);
        alert('There was an error getting your projects');
    }  
}

function* getPreviousProjects() {
    try {
        const previousProjects = yield call(axios.get, 'api/project/previous');
        yield put({type: 'SET_ALL_PREVIOUS_PROJECTS', payload: previousProjects.data}); 
    } catch (error) {
        console.log('ERROR', error);
        alert('There was an error getting your projects');
    }  
}

function* projectSaga() {
    yield takeLatest('ADD_PROJECT', addProject);
    yield takeLatest('GET_ALL_CURRENT_PROJECTS', getCurrentProjects);
    yield takeLatest('GET_ALL_PREVIOUS_PROJECTS', getPreviousProjects);
}

export default projectSaga;