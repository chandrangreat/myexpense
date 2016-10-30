import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Expenses = new Mongo.Collection('Expenses');

Expenses.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Expenses.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Expenses.schema = new SimpleSchema({
    userId: {
      type : String,
      label : 'User Id',  
    },
    incomeFlag: {
      type : Number,
      label : 'User Income Flag',
      optional : true,
      defaultValue : 0
    },
    income: {
        type : Number,
        optional : true,
        label : 'User Income',
    }
});

Expenses.attachSchema(Expenses.schema);