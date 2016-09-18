import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../imports/ui/App.jsx';
import Login from '../imports/ui/Login.jsx';
import Welcome from '../imports/ui/Welcome.jsx';
import Signup from '../imports/ui/Signup.jsx';
import '../node_modules/wingcss/dist/wing.min.css';



Meteor.startup(() => {
  render(<Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Welcome}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
    </Route>
  </Router>
  , document.getElementById('target-place'));
});
