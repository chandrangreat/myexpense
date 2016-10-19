import React, { Component } from 'react';
import {Link} from 'react-router';
import { IndexLink } from 'react-router';
import { PublicNavigation } from './PublicNavigation';
import { AuthenticatedNavigation } from './AuthenticatedNavigation';



export default class Navbar extends Component{
  
  renderNavigation(hasUser) {
    return hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />;
  }

  render(){
    return (
      <div className="navbar">
        <span className="navbar-item"><IndexLink to="/" activeClassName="active">Home</IndexLink></span>
        { this.renderNavigation(this.props.hasUser) }
      </div>
    );
  }
}

Navbar.propTypes = {
  hasUser: React.PropTypes.object,
};
