import $ from 'jquery';
import 'jquery-validation';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
//import { Accounts } from 'meteor/accounts-base';
import { getInputValue } from './get-input-value';
import { setIncomeAndFlag } from '../api/expenses/methods.js';

let component;

const insertIncome = () => {
  const userIncome = Number(getInputValue(component.refs.income));
  const userId = Meteor.userId();
  setIncomeAndFlag.call({userId: userId, userIncome : userIncome}, (error) => {
    if(error){ alert(error); }
    else {
      browserHistory.push('/');
    }
  });
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

