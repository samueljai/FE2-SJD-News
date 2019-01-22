import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar';
import Articles from './Components/Articles';
import Topics from './Components/Topics';
import Users from './Components/Users';

class App extends Component {

  state = {
    sidebarClassName: 'sidebar',
  }

  render() {
    const { sidebarClassName } = this.state;

    return (
      <div className="App">
        <div className={sidebarClassName}>
          <div className="logo">SJD News</div>
          <NavBar toggleSidebar={this.toggleSidebar} />
        </div>
        <Router className="mainDisplay">
          <Homepage path="/" toggleSidebar={this.toggleSidebar} />
          <Topics path="/topics" toggleSidebar={this.toggleSidebar} />
          <Articles path="/topics/:slug/articles" toggleSidebar={this.toggleSidebar} />
          <Articles path="/articles" toggleSidebar={this.toggleSidebar} />
          <Users path="/users" toggleSidebar={this.toggleSidebar} />
        </Router>
      </div>
    );
  }

  toggleSidebar = () => {
    let { sidebarClassName } = this.state;
    sidebarClassName = sidebarClassName === 'sidebar' ? 'sidebar active' : 'sidebar'
    this.setState({ sidebarClassName });
  }
}



export default App;
