import { Mongo } from 'meteor/mongo';
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
    income: {
        type : Number,
        label : 'User Income',
    }
});

Expenses.attachSchema(Expenses.schema);