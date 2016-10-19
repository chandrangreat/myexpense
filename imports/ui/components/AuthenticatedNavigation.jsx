import React, { Component } from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

export const AuthenticatedNavigation = () => (
    <span className="navbar-account">
          <span className="navbar-item">Welcome { userName() }</span>
          <span className="navbar-item" onClick={ handleLogout }>Logout</span>
    </span>
);