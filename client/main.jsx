import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import Navbar from '../imports/ui/Navbar.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('target-place'));
  render(<Navbar />, document.getElementById('target-header'));
});
