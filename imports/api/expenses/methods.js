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

export const checkIncomeFlag = new ValidatedMethod({
  name: 'user.checkFlag',
  validate: new SimpleSchema({
    userId: { type: String },
  }).validator(),
  run(usersId){
    let userId = usersId.userId;
    const id= Expenses.findOne({userId:userId});
    console.log(id);
      if(id.incomeFlag == 0) { return false; }
      else return true;
  }
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