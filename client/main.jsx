import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.jsx';
import Login from '../imports/ui/Login.jsx';
import { Router, Route, hashHistory } from 'react-router'


Meteor.startup(() => {
  render(<Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="/login" component={Login}/>
    </Route>
  </Router>
  , document.getElementById('target-place'));
});
