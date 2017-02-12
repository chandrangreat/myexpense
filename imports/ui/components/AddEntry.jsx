import React, { Component } from 'react';
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
   

    handleDateChange(date){
        this.setState({
            startDate: date,
        });
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
                                           selected={this.state.startDate}
                                           onChange={this.handleDateChange.bind(this)} />
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        );
    };
}