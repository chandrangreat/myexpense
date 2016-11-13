import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../../ui/components/App.jsx';
import Login from '../../ui/components/Login.jsx';
import Welcome from '../../ui/components/Welcome.jsx';
import Signup from '../../ui/components/Signup.jsx';
import Income from '../../ui/components/Income.jsx';
import Dashboard from '../../ui/components/Dashboard.jsx';

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
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <Route path="/enterIncome" component={Income}  onEnter={ requireAuth } />
      <Route path="/dashboard" component={Dashboard} onEnter={ requireAuth } />
    </Route>
  </Router>
  , document.getElementById('target-place'));
});
