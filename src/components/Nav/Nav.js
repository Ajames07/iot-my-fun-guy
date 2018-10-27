import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Nav extends Component {

  constructor(props){
    super(props);
  }

  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    
    const sideList = (
      <div className="nav-link-list">
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <Link className="nav-link" to="/home">
         {/* Show this link if they are logged in or not,
         but call this link 'Home' if they are logged in,
         and call this link 'Login / Register' if they are not */}
         {this.props.user.id ? 'Home' : 'Login / Register'}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
       {this.props.user.id && (
         <>
           <Link className="nav-link" to="/info">
             Info Page
           </Link>
           <LogOutButton className="nav-link"/>
         </>
       )}
       {/* Always show this link since the about page is not protected */}
       <Link className="nav-link" to="/about">
         About
       </Link>

      </div>
    );

    return (
      <div className="nav-btn-container">
        <Button className="nav-button" onClick={this.toggleDrawer('right', true)}>
          <div className="hamburger hamburger--3dx" id="hamburger" >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </Button>
        <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );

  }
}

// const Nav = (props) => (
//   <div className="nav">
//     <Link to="/home">
//       <h2 className="nav-title">My Fun Guy</h2>
//     </Link>
//     <div className="nav-right">
//       <Link className="nav-link" to="/home">
//         {/* Show this link if they are logged in or not,
//         but call this link 'Home' if they are logged in,
//         and call this link 'Login / Register' if they are not */}
//         {props.user.id ? 'Home' : 'Login / Register'}
//       </Link>
//       {/* Show the link to the info page and the logout button if the user is logged in */}
//       {props.user.id && (
//         <>
//           <Link className="nav-link" to="/info">
//             Info Page
//           </Link>
//           <LogOutButton className="nav-link"/>
//         </>
//       )}
//       {/* Always show this link since the about page is not protected */}
//       <Link className="nav-link" to="/about">
//         About
//       </Link>
//     </div>
//   </div>
// );

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
