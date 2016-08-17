import React, { Component } from 'react';


export default class Navbar extends Component{
  render(){
    return (
      <div className="navbar">
        <span className="navbar-item">Home</span>
        <span className="navbar-account"><span className="navbar-item">Signup</span><span className="navbar-item">Login</span></span>
      </div>
    );
  }
}
