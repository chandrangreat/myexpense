import React, {Component} from 'react';
import Navbar from '../containers/app-navigation';


export default class App extends Component {
  render(){
    return (
      <div className="app-container">
      
          <header id="target-header">
            <Navbar />
          </header>
        {this.props.children}
        
      </div>
    );
  }
}
