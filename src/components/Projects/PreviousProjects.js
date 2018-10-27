import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../../styles/main.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import moment from 'moment';

const mapStateToProps = state => ({
    projects: state.projects.previousProjects,
})

class MainPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_ALL_PREVIOUS_PROJECTS' });
    }

    toMainPage = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <div className="justify-center">

                    <h2>Previous Projects</h2>
                    {this.props.projects.map((project, i) => {
                        return (
                            <div key={i}>
                                <Paper style={{ width: '40vw' }} className="center-text">
                                    <div className="center-text">
                                        <h3 style={{ marginTop: '16px'}}>{project.project_name}</h3>
                                    </div>
                                    <span>Temp: </span><br />
                                    <span>Location: {project.project_location}</span><br />
                                    <span>Date Started: {moment(project.date_started).format('YYYY-MM-DD')}</span>
                                </Paper>
                                <br />
                            </div>
                        )
                    })}
                    <br />
                    <Button variant="contained" color="primary" onClick={this.toMainPage}>Back</Button>
                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps)(MainPage);