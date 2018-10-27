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

//function to get single projects details to display on drawer
function* getProjectDetails(action) {

    const projectId = action.payload

    try{
        const singleProjectDetails = yield call(axios.get, 'api/project/details/' + projectId);
    }
    catch (error) {
        console.log('ERROR', error);
        alert('There was an error getting the project');
    }
}//end getProjectDetails

function* projectSaga() {
    yield takeLatest('ADD_PROJECT', addProject);
    yield takeLatest('GET_ALL_CURRENT_PROJECTS', getCurrentProjects);
    yield takeLatest('GET_ALL_PREVIOUS_PROJECTS', getPreviousProjects);
    yield takeLatest('GET_PROJECT_DETAILS', getProjectDetails);
}

export default projectSaga;