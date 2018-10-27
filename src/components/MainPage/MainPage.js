import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './MainPage.css';
import '../../styles/main.css';

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

    toCurrentProjects = () => {
        this.props.history.push('/current');
    }

    toPreviousProjects = () => {
        this.props.history.push('/previous');
    }

    toNewProject = () => {
        this.props.history.push('/new-project')
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <div className="justify-center main-page">
                        <Button variant="contained" color="primary" style={{ margin: 5, width: '80vw', height: '10vh' }} onClick={this.toNewProject}>Add a Project</Button>
                        <br />
                        <Button variant="contained" color="primary" style={{ margin: 5, width: '80vw', height: '10vh' }} onClick={this.toCurrentProjects}>Current Projects</Button>
                        <br />
                        <Button variant="contained" color="primary" style={{ margin: 5, width: '80vw', height: '10vh' }} onClick={this.toPreviousProjects}>Previous Projects</Button>
                    </div>
                </div>
            </MuiThemeProvider>
          
        );
    }
}


export default MainPage;