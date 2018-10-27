import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../../styles/main.css';

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
            <div>
                <div className="justify-center">
                    <Button variant="contained" style={{ margin: 5, width: '25vh' }} onClick={this.toNewProject}>Add a Project</Button>
                    <br />
                    <Button variant="contained" style={{ margin: 5, width: '25vh' }} onClick={this.toCurrentProjects}>Current Projects</Button>
                    <br />
                    <Button variant="contained" style={{ margin: 5, width: '25vh' }} onClick={this.toPreviousProjects}>Previous Projects</Button>
                </div>
            </div>
        );
    }
}


export default MainPage;