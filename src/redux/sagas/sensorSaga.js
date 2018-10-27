import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//allows data from SensorDataForm to be manually posted to server
function* sensorDisplay(action) {
    console.log('post sensor saga with action', action);
    try {
        const sensorResponse = yield call(axios.post, '/api/sensor', action.payload);
            const responseAction = { type: 'GET_DATA', payload: sensorResponse.data }
            yield put(responseAction);
    }catch(error) {
        console.log(error);
        alert('unable to post sensor data',error);
    }//end error handling
}//end sensorDisplay

//retrieves data from server and populates DOM
function* sensorRetrieve(action) {
    console.log('get sensor saga with action', action);
    try {
        const sensorResponse = yield call(axios.get, '/api/sensor');
        const responseAction = { type: 'FETCH_DATA', payload: sensorResponse.data }
        yield put(responseAction);
    }catch(error) {
        console.log(error);
        alert('unable to get data', error);
    }//end error handling   
}//end sensorRetrieve

//allows data to be manually changed in sensorDataForm edit functionality
function* sensorEdit(action) {
    console.log('put sensor saga with action', action);
    try {
        const sensorResponse = yield call(axios.put, `/api/sensor/${action.payload.id}`, action.payload);
            const responseAction = { type: 'GET_DATA', payload: sensorResponse.data }
            yield put(responseAction);
    }catch(error) {
        console.log(error);
        alert('unable to edit sensor data', error);
    }//end error handling
}//end sensorEdit

//allows data to be removed from the server
function* sensorDataDelete(action) {
    console.log('delete sensor saga with action', action);
    try {
        const sensorResponse = yield call(axios.delete, `/api/sensor/${action.payload}`);
        yield put({ type: 'GET_DATA' }); 
    }catch(error) {
        console.log(error);
        alert('unable to delete sensor data', error)
    }//end error handling
}//end sensorDataDelete

function* sensorSaga() {
    yield takeLatest('POST_DATA', sensorDisplay);
    yield takeLatest('GET_DATA', sensorRetrieve);
    yield takeLatest('PUT_DATA', sensorEdit);
    yield takeLatest('DELETE_DATA', sensorDataDelete);
}//end sensorSaga

export default sensorSaga;