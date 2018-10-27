import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../../styles/main.css';
import Paper from '@material-ui/core/Paper';

class MainPage extends Component {

    toMainPage = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <div className="justify-center">
                    <Paper>
                        <div>
                    <div>Current Projects</div>
                        </div>
                    </Paper>
                    <br /> 
                    <Button variant="contained" color="primary" onClick={this.toMainPage}>Back</Button>
                </div>
            </div>
        );
    }
}


export default MainPage;