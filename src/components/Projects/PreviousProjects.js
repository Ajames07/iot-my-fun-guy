import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../../styles/main.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class MainPage extends Component {

    toMainPage = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <div className="justify-center">

                    <h2>Previous Projects</h2>
                    <Paper style={{ width: '40vh' }}>
                        <Grid container>
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
                    <Paper style={{ width: '40vh' }}>
                        <Grid container>
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
                    </Paper><Paper style={{ width: '40vh' }}>
                        <Grid container>
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