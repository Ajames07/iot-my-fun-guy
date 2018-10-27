import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* addProject(action) {
    console.log(action.payload);
    yield call(axios.post, '/api/project/add', action.payload);
}

function* projectSaga() {
    yield takeLatest('ADD_PROJECT', addProject);
}

export default projectSaga;