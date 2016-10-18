import React, { Component } from 'react';
import {Link} from 'react-router';
import { IndexLink } from 'react-router';



export default class Navbar extends Component{
  render(){
    return (
      <div className="navbar">
        <span className="navbar-item"><IndexLink to="/" activeClassName="active">Home</IndexLink></span>
        <span className="navbar-account">
          <span className="navbar-item"><Link to="/signup">Signup</Link></span>
          <span className="navbar-item"><Link to="/login">Login</Link></span>
        </span>
      </div>
    );
  }
}
