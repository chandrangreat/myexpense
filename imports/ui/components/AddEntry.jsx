import React, { Component } from 'react';


export default class AddEntry extends Component{
    render(){
        return (
            <div>
                    <div className="container login-container">
                        <div className="row">
                            <div className="col-12 centered">
                                <h3 className="text-center">Add Entry</h3>
                                <form ref="addentry" className="addentry-form">
                                    <input ref="date"/>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        );
    };
}