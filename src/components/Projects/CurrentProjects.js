import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../../styles/main.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class MainPage extends Component {

    toMainPage = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <div className="justify-center">

                    <h2>Current Projects</h2>
                    <Paper style={{ width: '50vh' }}>
                        <Grid container spacing={40} className="projectContainer">
                            <Grid item md={6}>
                                <h4 style={{ marginTop: '16px' }}>Project name</h4>
                                <img alt="project" />
                            </Grid>
                            <Grid item md={6}>
                                <p>Temp Data</p>
                                <p>Location: basement</p>
                                <p>Date Started</p>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper style={{ width: '50vh' }}>
                        <Grid container spacing={40} className="projectContainer">
                            <Grid item md={6}>
                                <h4 style={{ marginTop: '16px' }}>Project name</h4>
                                <img alt="project" />
                            </Grid>
                            <Grid item md={6}>
                                <p>Temp Data</p>
                                <p>Location: basement</p>
                                <p>Date Started</p>
                            </Grid>
                        </Grid>
                    </Paper><Paper style={{ width: '50vh' }}>
                        <Grid container spacing={40} className="projectContainer">
                            <Grid item md={6}>
                                <h4 style={{ marginTop: '16px' }}>Project name</h4>
                                <img alt="project" />
                            </Grid>
                            <Grid item md={6}>
                                <p>Temp Data</p>
                                <p>Location: basement</p>
                                <p>Date Started</p>
                            </Grid>
                        </Grid>
                    </Paper>
                    <br />
                    <Button variant="contained" color="primary" onClick={this.toMainPage}>Back</Button>
                </div>
            </div>
        );
    }
}


export default MainPage;