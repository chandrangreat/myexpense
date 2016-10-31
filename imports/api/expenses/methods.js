import { Expenses } from './expenses';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

//Method to insert user while signing up
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

//Method to check the value 'incomeFlag' in order to redirect user tp Income.jsx page
export const checkIncomeFlag = new ValidatedMethod({
  name: 'user.checkFlag',
  validate: new SimpleSchema({
    userId: { type: String },
  }).validator(),
  run(usersId){
    let userId = usersId.userId;
    const id= Expenses.findOne({userId:userId});
    //console.log(id);
      if(id.incomeFlag == 0) { return false; }
      else return true;
  }
});

//Method to save the Income value entered by User and set the 'incomeFlag'' value
export const setIncomeAndFlag = new ValidatedMethod({
  name: 'user.setIncomeAndFlag',
  validate: new SimpleSchema({
    userId: { type: String },
    userIncome : { type : Number }
  }).validator(),
  run(usersId){
    let userId = usersId.userId;
    let userIncome = usersId.userIncome;
    const id= Expenses.update( { userId:userId }, { $set : { incomeFlag : 1, income : userIncome } } );
    //console.log(id);
    if(id.incomeFlag == 0) { return false; }
      else return true;
     }
});