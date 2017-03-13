import React, { Component } from 'react';
import { handleAddEntry } from '../../modules/add-entry'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';//../../../node_modules/wingcss/dist/wing.min.css';



export default class AddEntry extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            startDate: moment(),
        };
     }
   
      handleSubmit(event) {
        event.preventDefault();        
    }

    handleDateChange(date){
        this.setState({
            startDate: date,
        });
    }

     componentDidMount(){
        handleAddEntry({ component : this, selectedDate : this.state.startDate });
     }
    

    render(){
        return (
            <div>
                    <div className="container login-container">
                        <div className="row">
                            <div className="col-12 centered">
                                <h3 className="text-center">Add Entry</h3>
                                <form ref="addentry" className="addentry-form">
                                    <DatePicker
                                            ref="spenddate" name="spenddate"
                                           selected={this.state.startDate}
                                           onChange={this.handleDateChange.bind(this)} />
                                    <input ref="amount" type="text" placeholder="Amount" name="amount" />
                                    <input ref="agenda" type="text" placeholder="Agenda (Optional)" name="agenda" />
                                    <input type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        );
    };
}