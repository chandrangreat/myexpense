import React, {Component} from 'react';
import Navbar from './Navbar.jsx';


export default class App extends Component {
  render(){
    return (
      <div className="container">
          <header id="target-header">
            <Navbar />
          </header>
        {this.props.children}
      </div>
    );
  }
}
