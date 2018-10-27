import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../../styles/main.css';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
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


const styles = {
    projectDetails: {
        width: '100vw',
    },
};


const mapStateToProps = state => ({
    projects: state.projects.currentProjects,
    projectDetails: state.projectDetails.singleProject,
});

class CurrentProjects extends Component {

    state = {
        left: false,
        secondLeft: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    toggleSecondDrawer = (open) => () => {
        this.setState({
            secondLeft: open,
        })
    }

    getProjectDetails = (projectId) => {
       
        console.log('in getProjectDetails', projectId);

        const action = {type: 'GET_PROJECT_DETAILS', payload: projectId};
    
        this.props.dispatch(action);

        if(this.props.projectDetails.length > 0){
            this.setState({
                left: true,
            });
        };
        
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_ALL_CURRENT_PROJECTS' });
    }

    toMainPage = () => {
        this.props.history.push('/home');
    }

    render() {

        const { classes } = this.props;

        let singleProjectDetails = null;
        
        if(this.props.projectDetails.length > 0){

            const details = this.props.projectDetails[0];

            singleProjectDetails = (
                <MuiThemeProvider theme={theme}>
                    <div className={classes.projectDetails}>
                        <h2>Project Details</h2>
                        <h4>{details.project_name}</h4>
                        <Button variant="contained" color="primary" onClick={this.toggleSecondDrawer(true)}>Notes</Button>
                        <SwipeableDrawer
                            anchor="left"
                            open={this.state.secondLeft}
                            onClose={this.toggleSecondDrawer(false)}
                            onOpen={this.toggleSecondDrawer(true)}
                            className={classes.projectDetails}
                        >
                            <div
                                tabIndex={0}
                                role="button"
                                onClick={this.toggleSecondDrawer(false)}
                                onKeyDown={this.toggleSecondDrawer(false)}
                            >
                                <p>Close</p>
                            </div>
                            <div className={classes.projectDetails}>
                                <h2>Notes</h2>
                                <div className="notesContainer">

                                </div>
                            </div>

                        </SwipeableDrawer>
                    </div>
                </MuiThemeProvider>
               
            );
        }

        if (this.props.projects) {
            return (
                <MuiThemeProvider theme={theme}>
                    <div>
                        <div className="justify-center">

                            <h2>Current Projects</h2>
                            <div className="projectContainer">
                                {this.props.projects.map((project, i) => {
                                    return (
                                        <div key={i} onClick={() => this.getProjectDetails(project.id)} >
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
                                <SwipeableDrawer
                                    anchor="left"
                                    open={this.state.left}
                                    onClose={this.toggleDrawer('left', false)}
                                    onOpen={this.toggleDrawer('left', true)}
                                    className={classes.projectDetails}
                                >
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        onClick={this.toggleDrawer('left', false)}
                                        onKeyDown={this.toggleDrawer('left', false)}
                                    >
                                        <p>Close</p>   
                                    </div>
                                    {singleProjectDetails}
                                </SwipeableDrawer>
                            </div>
                          

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

CurrentProjects.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styledList = withStyles(styles)(CurrentProjects);

export default connect(mapStateToProps)(styledList);