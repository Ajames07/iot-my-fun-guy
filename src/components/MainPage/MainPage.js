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

    render() {
        return (
            <div>
                <div className="justify-center">
                    <Button variant="contained" style={{margin: 5}} onClick={this.toCurrentProjects}>Current Projects</Button>
                    <br />
                    <Button variant="contained" style={{margin: 5}} onClick={this.toPreviousProjects}>Previous Projects</Button>
                </div>
            </div>
        );
    }
}


export default MainPage;