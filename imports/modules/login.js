import $ from 'jquery';
import 'jquery-validation';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
//import { Accounts } from 'meteor/accounts-base';
import { getInputValue } from './get-input-value';
import { checkIncomeFlag } from '../api/expenses/methods.js';

let component;

const login = () => {
  const username = getInputValue(component.refs.uname);
  const password = getInputValue(component.refs.password);
  Meteor.loginWithPassword(username, password, (error) => {
    if(error){ alert(error.reason); }
     else {
     var userId = Meteor.userId();
    var checkFlag = checkIncomeFlag.call({userId:userId},(error) => {
        if(error){alert(error);}
      });
      if(checkFlag){
        browserHistory.push('/');
      }else{
        browserHistory.push('/enterIncome');        
      }
      alert('Welcome');//Bert.alert('Welcome!', 'success');
    }
  });
};

const validate = () => {
  $(component.refs.login).validate({
    rules: {
      uname: {
        required: true,
      },
      password: {
        required: true,
      },
    },
    messages: {
      uname: {
        required: 'Need a username here.',
      },
      password: {
        required: 'Need a password here.',
      },
    },
    submitHandler() { login(); },
  });
};


export const handleLogin = (options) => {
  component = options.component;
  //console.log(component);
  validate();
};

