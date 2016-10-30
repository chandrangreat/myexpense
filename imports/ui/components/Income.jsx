import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { handleUserIncome } from '../../modules/income';


export default class Income extends Component{
    componentDidMount(){
        handleUserIncome({ component : this });
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render(){
        return (
            <div className="container income-container">
                <div className="row">
                    <div className="col-6 centered">
                    <h3 className="text-center">What's your monthly income?</h3>
                     <form ref="incomeForm" className="imcome" onSubmit={ this.handleSubmit }>
                        <input ref="income" type="text" name="income" placeholder="Enter you monthly income"/>
                        <input type="submit" />
                     </form>
                     </div>
                </div>
            </div>
        );
    }
}