import React, { Component } from 'react';
import {Link} from 'react-router';

export const PublicNavigation = () => (
    <span className="navbar-account">
          <span className="navbar-item"><Link to="/signup">Signup</Link></span>
          <span className="navbar-item"><Link to="/login">Login</Link></span>
    </span>
);