import { Expenses } from './expenses';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';


export const insertUser = new ValidatedMethod({
  name: 'user.insert',
  validate: new SimpleSchema({
    userId: { type: String },
    //incomeFlag: {type: Number},
  }).validator(),
  run(usersId){
    Expenses.insert({userId:usersId.userId,incomeFlag:0});
  },
});

  // 'user.insert'(userId){
  //   check(userId,String);
  //   if (! this.userId) {
  //     throw new Meteor.Error('not-authorized');
  //   }
  //   Expenses.insert({
  //     userId: userId
  //   });
  // },

  // 'user.checkIncomeFlag'(userId){
  //   let id= Expenses.findOne({userId:userId},{ incomeFlag:1 });
  //   console.log(id);
  // },