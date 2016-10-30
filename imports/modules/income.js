import $ from 'jquery';
import 'jquery-validation';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
//import { Accounts } from 'meteor/accounts-base';
import { getInputValue } from './get-input-value';

let component;

const insertIncome = () => {
  const userIncome = getInputValue(component.refs.income);
  alert(userIncome);
};

const validate = () => {
  $(component.refs.incomeForm).validate({
    rules: {
      income: {
        required: true,
      }
    },
    messages: {
      income: {
        required: 'Need monthly income to continue.',
      },
    },
    submitHandler() { insertIncome(); },
  });
};


export const handleUserIncome = (options) => {
  component = options.component;
  //console.log(component);
  validate();
};

