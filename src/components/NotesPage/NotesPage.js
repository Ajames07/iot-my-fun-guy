import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import moment from "moment";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../styles/main.css';
import axios from 'axios';
import './NotesPage.css';

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

const styles = {
    projectDetails: {
        width: '100vw',
    },
};

const mapStateToProps = state => ({
    projects: state.projects.currentProjects,
    projectDetails: state.projectDetails.singleProject,
    projectNotes: state.projectDetails.projectNotes,
});

class NotesPage extends Component {

    state = {
        newNotes: '',
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    addNote = (event) => {
        event.preventDefault();
        console.log('in addNote', this.state.newNotes, this.props.projectDetails[0].id);

        const noteToSend = {
            note: this.state.newNotes,
            project_id: parseInt(this.props.projectDetails[0].id),
        }

        axios.post('api/project/addNote', noteToSend)
            .then((response) => {
                console.log('note added');
                //call get details saga 
                const action = {type: 'GET_PROJECT_DETAILS', payload: this.props.projectDetails[0].id};

                this.props.dispatch(action);
            })
            .catch((error) => {
                console.log('error adding note', error);
            });
    }

    render(){

        let projectNotes = null;

        if(this.props.projectNotes.length > 0){
            projectNotes = (
                <div className="notesContainer">
                    {this.props.projectNotes.map((note, i) => {
                        return (
                            <div className="note" key={i}>
                                <p>{note.note}</p>
                                <p>{note.note_date}</p>
                            </div>
                        )
                    })}
                </div>
            )
        }

        

        return(
            <MuiThemeProvider theme={theme}>
                <div >
                    <h2>Notes</h2>
                    <form onSubmit={this.addNote} className="note-form">
                        <TextField
                            label="New Notes"
                            type="text"
                            name="newNotes"
                            value={this.state.newNotes}
                            onChange={this.handleInputChangeFor('newNotes')}
                        />
                        <Button variant="contained" color="primary" type="submit">Add Note</Button>
                    </form>
                    {projectNotes}
                </div>
            </MuiThemeProvider>
           
        )
    }
}

NotesPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styledList = withStyles(styles)(NotesPage);

export default connect(mapStateToProps)(NotesPage);