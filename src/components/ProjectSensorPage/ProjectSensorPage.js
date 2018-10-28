import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from "moment";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const mapStateToProps = state => ({
  sensorDataList: state.sensorDataList.SensorDataList
});//end mapStateToProps

class ProjectSensorPage extends Component {

  state = {
    sensorInfo: {
        temperature: '',
        humidity: '',
        voc: '',
        date: '',
    },//end sensorInfo
    //this is utilized in sensorEdit
    sensorDataArray: [],
    isUpdating: false,
    updatingId: 0
};//end state

componentDidMount () {
        this.props.dispatch({type: 'GET_DATA'});
    };//end componentDidMount

    handleDataSubmit = (event) => {
      //takes data from input and submits them to database and displays information on dom
      console.log('in handleDataSubmit');
      event.preventDefault();
      if(this.state.isUpdating){
      this.props.dispatch({ type: 'PUT_DATA', payload:{...this.state.sensorInfo, id: this.state.updatingId}})
      this.setState({
          sensorInfo: {
              temperature: '',
              humidity: '',
              voc: '',
              date: '',
          },//end sensorInfo
          isUpdating: false,
          updatingId: 0
      });//end setState 
      } else {
       this.props.dispatch({ type: 'POST_DATA', payload: this.state.sensorInfo })
          this.setState({
              sensorInfo: {
                  temperature: '',
                  humidity: '',
                  voc: '',
                  date: ''
              }//sensorInfo
          });//end setState   
      }//end if else      
  };//end handleDataSubmit

  sensorEdit = (sensor) => (event) => {
    //this edits temperature and humidity in the sensorForum table
    this.setState({
        sensorInfo: {
            temperature: sensor.temperature,
            humidity: sensor.humidity,
            voc: sensor.voc,
            date: sensor.date,
        },//end sensorInfo
        isUpdating: true,
        updatingId: sensor.id
    });//end setState
};//end sensorEdit

sensorDataDelete = (sensor) => {
  //allows data to be removed from server and DOM
  this.props.dispatch({ type: 'DELETE_DATA', payload: sensor})
}//end sensorDataDelete

  render() {
    return (
      <div>
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Temperature</TableCell>
                        <TableCell>Humidity</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.sensorDataList.map((sensor,i) => {
                        return (
                            <TableRow key={i}>
                                <TableCell>{sensor.temperature}F</TableCell>
                                <TableCell>{sensor.humidity}%</TableCell>
                                <TableCell>{sensor.voc}</TableCell>
                                <TableCell>{moment(sensor.date).format('YYYY-MM-DD')}</TableCell>
                                <TableCell><Button  variant="outlined" color="primary" size="small" onClick={this.sensorEdit(sensor)}>Edit</Button></TableCell>
                                <TableCell><Button  variant="outlined" color="secondary" size="small" onClick={() => this.sensorDataDelete(sensor.id)}>Delete</Button></TableCell>
                            </TableRow>
                        );
                    })} 
                </TableBody>
            </Table>
        </div>
        <div>
            <form onSubmit={this.handleDataSubmit}>
                <div>
                    <label>Temprature:</label>
                    <input type="text" value={this.state.sensorInfo.temperature} onChange={this.handleInputChange('temperature')}  placeholder="Temperature"/>
                </div>
                <div>
                    <label>Humidity:</label>
                    <input type="text" value={this.state.sensorInfo.humidity} onChange={this.handleInputChange('humidity')}  placeholder="Humidity"/>
                </div>
                <div>
                  <label>VoC:</label>
                  <input type="text" value={this.state.sensorInfo.voc} onChange={this.handleInputChange('voc')} placeholder="VoC"/>
                </div>
                <div>
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </div>
            </form>
        </div>
    </div>
    )
  }//end render
};//end ProjectSensorPage

export default connect(mapStateToProps)(ProjectSensorPage)