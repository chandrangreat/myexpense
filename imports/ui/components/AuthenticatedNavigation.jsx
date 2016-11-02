import React, { Component } from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { IndexLink } from 'react-router';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first}` : '';
};

export const AuthenticatedNavigation = () => (
  <div>
    <span className="navbar-item"><IndexLink to="/" activeClassName="active">Dashboard</IndexLink></span>
    <span className="navbar-account">
          <span className="navbar-item">Hi { userName() }</span>
          <span className="navbar-item" onClick={ handleLogout }><Link to="javascript:void(0)">Logout</Link></span>
    </span>
  </div>
);