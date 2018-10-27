import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  sensorDataList: state.sensorDataList.SensorDataList
});//end mapStateToProps

class ProjectSensorPage extends Component {

  state = {
    sensorInfo: {
        temperature: '',
        humidity: '',
        voc: '',
        lux: '',
        date: '',
    },//end sensorInfo
    //this is utilized in sensorEdit
    sensorDataArray: [],
    isUpdating: false,
    updatingId: 0
};//end state

componentDidMount () {
        this.props.dispatch({type: 'GET_DATA'});
    }//end componentDidMount

  render() {
    return (
      <div>
        
      </div>
    )
  }//end render
};//end ProjectSensorPage

export default connect(mapStateToProps)(ProjectSensorPage)