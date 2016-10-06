//import $ from 'jquery';
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

export const handleSignup = (options) => {
  component = options.component;
  signUp();
};

