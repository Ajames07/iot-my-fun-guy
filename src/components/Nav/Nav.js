import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

const styles = {
  list: {
    width: 100,
  },
};

class Nav extends Component {


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
      <div className={classes.list} style={{background: 'transparent'}}>
        <div class="nav-close">
          <p>CLOSE</p>
        </div>
        <Link className="nav-link" to="/home">
         {/* Show this link if they are logged in or not,
         but call this link 'Home' if they are logged in,
         and call this link 'Login / Register' if they are not */}
         {this.props.user.id ? 'Home' : 'Login / Register'}
        </Link>
        {/* Show the link to the current projects page and the logout button if the user is logged in */}
        {this.props.user.id && (
          <>
            <Link className="nav-link" to="/current">
              Current 
           </Link>
          </>
        )}
        {/* Show the link to the previous projects page and the logout button if the user is logged in */}
        {this.props.user.id && (
          <>
            <Link className="nav-link" to="/previous">
              Previous
           </Link>
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        <Link className="nav-link" to="/about">
          About
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
      

      </div>
    );

    return (
      <div className="nav-btn-container">
        <img src="./images/myFunGuyLogo.svg" alt="logo"/>
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
const mapStateToProps = state => ({
  user: state.user,
});

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledNav = withStyles(styles)(Nav);

export default connect(mapStateToProps)(styledNav);
