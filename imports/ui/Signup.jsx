import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
//import $ from 'jquery';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends Component{
 
    handleSubmit(event){
        event.preventDefault();
      const uname = ReactDOM.findDOMNode(this.refs.uname).value.trim();
      const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
     alert(uname);
    }
    render(){
        return(
            <div className="container signup-container">
                <div className="row">
                    <div className="col-6 centered">
                    <h3 className="text-center">Signup</h3>
                     <form ref="signup" className="signup" onSubmit={ this.handleSubmit.bind(this) }>
                        <input type="text"ref="uname" name="uname" placeholder="Username"/>
                        <input type="password" ref="password" name="password" placeholder="Password" />
                        <input type="submit" />
                     </form>
                     </div>
                </div>
            </div>
        );
    }
}