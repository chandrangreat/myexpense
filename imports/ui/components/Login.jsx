import React, {Component} from 'react';
import { handleLogin } from '../../modules/login';

export default class Login extends Component{

    componentDidMount(){
        handleLogin({ component : this });
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render(){
        return(
            <div className="container login-container">
                <div className="row">
                    <div className="col-12 centered">
                    <h3 className="text-center">Login</h3>
                     <form ref="login" className="login" onSubmit={ this.handleSubmit }>
                        <input ref="uname" type="text" name="uname" placeholder="Username"/>
                        <input ref="password" type="password" name="password" placeholder="Password" />
                        <input type="submit" />
                     </form>
                     </div>
                </div>
            </div>
        );
    }
}
