import React, {Component} from 'react';

export default class Signup extends Component{
    render(){
        return(
            <div className="container signup-container">
                <div className="row">
                    <div className="col-6 centered">
                    <h3 className="text-center">Signup</h3>
                     <form ref="signup" className="signup" onSubmit={ this.handleSubmit }>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <input type="submit" />
                     </form>
                     </div>
                </div>
            </div>
        );
    }
}