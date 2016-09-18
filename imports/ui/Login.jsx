import React, {Component} from 'react';

export default class Login extends Component{
    render(){
        return(
            <div className="container login-container">
                <div className="row">
                    <div className="col-6 centered">
                    <h3 className="text-center">Login</h3>
                     <form ref="login" className="login" onSubmit={ this.handleSubmit }>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password" />
                        <input type="submit" />
                     </form>
                     </div>
                </div>
            </div>
        );
    }
}