import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../../styles/main.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import moment from "moment";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#ad0400'
        },
    }
});

const mapStateToProps = state => ({
    projects: state.projects.currentProjects
});

class MainPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_ALL_CURRENT_PROJECTS' });
    }

    toMainPage = () => {
        this.props.history.push('/home');
    }

    render() {
        if (this.props.projects) {
            return (
                <MuiThemeProvider theme={theme}>
                    <div>
                        <div className="justify-center">

                            <h2>Current Projects</h2>
                            {this.props.projects.map((project, i) => {
                                return (
                                    <div key={i}>
                                        <Paper style={{ width: '40vw' }} className="center-text">
                                            <div className="center-text">
                                                <h3 style={{ marginTop: '16px' }}>{project.project_name}</h3>
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
                </MuiThemeProvider>
            );
        }
        else {
            return (
                <div>Loading...</div>
            )
        }

    }
}


export default connect(mapStateToProps)(MainPage);