import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../imports/ui/App.jsx';
import Login from '../imports/ui/Login.jsx';
import Welcome from '../imports/ui/Welcome.jsx';
import Signup from '../imports/ui/Signup.jsx';
import '../node_modules/wingcss/dist/wing.min.css';

const requireAuth = (nextState, replace) => {
  if(!Meteor.loggingIn() && !Meteor.userId()){
    replace({
      pathname:'/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(<Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Welcome}/>
      <Route path="/signup" component={Signup} onEnter={ requireAuth }/>
      <Route path="/login" component={Login}/>
    </Route>
  </Router>
  , document.getElementById('target-place'));
});
