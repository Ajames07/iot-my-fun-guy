import { combineReducers } from 'redux';

const sensorData = [];

//stores data from sensors
const SensorDataList = (state = sensorData, action) => {
    switch (action.type) {
      case 'FETCH_DATA' :
      return action.payload 
      default:
      return state;
    }//end switch
  };//end SensorDataList

  export default combineReducers({
    SensorDataList,
  });//end combineReducers