import $ from 'jquery';
import { Meteor } from 'meteor/meteor';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { getInputValue } from './get-input-value';
import moment from 'moment';
//import { insertUser } from '../api/expenses/methods.js';


let component;
let selectedDate;

const getEntryData = () => ({
    spenddate: component.state.startDate.format(),
    amount: getInputValue(component.refs.amount),
    agenda: getInputValue(component.refs.agenda),
});

const addEntry = () => {
    const addEntryContent = getEntryData();
    console.log(addEntryContent);
}

const validate = () => {
    $(component.refs.addentry).validate({
        rules: {
            spenddate:{
                required: true,
            },
            amount: {
                required: true,
                number: true,
            },
        },
        messages: {
            spenddate:{
                required: 'Date?',
            },
            amount: {
                required: 'Amount?',
                number: 'Need a numerical value here',
            },
        },
        submitHandler() { addEntry(); },
    });
};

 export const handleAddEntry = (options) => {
     component = options.component;
     selectedDate = options.selectedDate;
     validate();
 }