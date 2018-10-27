import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../../styles/main.css';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';

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

class MainPage extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            location: '',
            date: '',
        }
    }

    submitProject = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_PROJECT', payload: this.state});
        this.setState({
            name: '',
            location: '',
            date: '',
        });
        alert('The project gas been added');
    }

    toMainPage = () => {
        this.props.history.push('/home');
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <div className="justify-center">
                        <Paper style={{ width: '50vh' }}>
                            <h2 className="center-text">Add a Project</h2>
                            <form className="center-text" style={{ width: '40vh' }} onSubmit={this.submitProject}>
                                <TextField style={{ width: '90%' }} label="Project Name" value={this.state.name} onChange={this.handleChange} name="name" />
                                <TextField style={{ width: '90%' }} label="Location" value={this.state.location} onChange={this.handleChange} name="location" />
                                <TextField style={{ width: '90%' }} label="Date Started" value={this.state.date} onChange={this.handleChange} name="date" />
                                <Button variant="contained" color="primary" type="submit" style={{ marginTop: '50px' }}>Add Project</Button>
                            </form>
                        </Paper>
                        <Button variant="contained" color="primary" onClick={this.toMainPage}>Back</Button>
                    </div>
                </div>
            </MuiThemeProvider>
           
        );
    }
}


export default connect()(MainPage);