import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { getInputValue } from './get-input-value';

let component;

const getUserData = () =>({
    email: getInputValue(component.refs.uname),
  password: getInputValue(component.refs.password),
  profile: {
    name: {
      first: getInputValue(component.refs.fname),
      last: getInputValue(component.refs.lname),
    },
  },
});

const signUp = () => {
  const user = getUserData();
  Accounts.createUser(user, (error) => {
    if (error) {
      alert('Error');
    } else {
      browserHistory.push('/');
      alert('Welcome');//Bert.alert('Welcome!', 'success');
    }
  });
};

const validate = () => {
  $(component.refs.signup).validate({
    rules: {
      fname: {
        required: true,
      },
      lname: {
        required: true,
      },
      uname: {
        required: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      fname: {
        required: 'First name?',
      },
      lname: {
        required: 'Last name?',
      },
      uname: {
        required: 'Need a username here.',
      },
      password: {
        required: 'Need a password here.',
        minlength: 'Use at least six characters, please.',
      },
    },
    submitHandler() { signUp(); },
  });
};


export const handleSignup = (options) => {
  component = options.component;
  console.log(component);
  validate();
};

