import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from '../imports/ui/App.jsx';
import Login from '../imports/ui/Login.jsx';
import Welcome from '../imports/ui/Welcome.jsx';



Meteor.startup(() => {
  render(<Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Welcome}/>
      <Route path="/login" component={Login}/>
    </Route>
  </Router>
  , document.getElementById('target-place'));
});
