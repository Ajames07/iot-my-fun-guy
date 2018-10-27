import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../../styles/main.css';

class MainPage extends Component {

    toCurrentProjects = () => {
        console.log('To current');
        
    }

    toPreviousProjects = () => {
        console.log('To previous');
        
    }

    render() {
        return (
            <div>
                <div className="justify-center">
                    <ul>
                        <li>Project</li>
                        <li>Project</li>
                        <li>Project</li>
                        <li>Project</li>
                        <li>Project</li>
                        <li>Project</li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default MainPage;