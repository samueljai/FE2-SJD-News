import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Homepage from './Components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="leftPanel">
          <div className="logo">Logo</div>
          <nav className="navPanel">
            Navigation
          </nav>
        </div>
        <Router className="mainDisplay">
          <Homepage path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
