import React, {Component} from 'react';
import Welcome from './Welcome.jsx';

export default class App extends Component {
  render(){
    return (
      <div className="container">
        <section className="welcome-block">
            <Welcome />
        </section>
      </div>
    );
  }
}
