import React, {Component} from 'react';

import Navbar from './Navbar.jsx';
import Welcome from './Welcome.jsx';

export default class App extends Component {
  render(){
    return (
      <div className="container">
        <header>

          <Navbar />

        </header>
        <section className="welcome-block">
            <Welcome />
        </section>
      </div>
    );
  }
}
