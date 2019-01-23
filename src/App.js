import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar';
import Articles from './Components/Articles';
import Topics from './Components/Topics';
import Users from './Components/Users';
import SingleArticle from './Components/SingleArticle';
import * as api from './Utils/api';
import NewArticle from './Components/NewArticle';

class App extends Component {

  state = {
    sidebarClassName: 'sidebar',
    user: {},
    loggedIn: false,
  }

  render() {
    const { sidebarClassName, user, loggedIn } = this.state;

    return (
      <div className="App">
        <div className={sidebarClassName}>
          <div className="logo">SJD News</div>
          <NavBar user={user} login={this.login} logout={this.logout} loggedIn={loggedIn} toggleSidebar={this.toggleSidebar} />
        </div>
        <Router className="mainDisplay">
          <Homepage path="/" toggleSidebar={this.toggleSidebar} />
          <Topics path="/topics" toggleSidebar={this.toggleSidebar} loggedIn={loggedIn} />
          <Articles path="/topics/:topic/articles" toggleSidebar={this.toggleSidebar} loggedIn={loggedIn} />
          <Articles path="/articles" toggleSidebar={this.toggleSidebar} loggedIn={loggedIn} />
          <NewArticle path="/new_article/" toggleSidebar={this.toggleSidebar} loggedIn={loggedIn} user={user} />
          <NewArticle path="/new_article/:topic" toggleSidebar={this.toggleSidebar} loggedIn={loggedIn} user={user} />
          <SingleArticle path="articles/:article_id" toggleSidebar={this.toggleSidebar} loggedIn={loggedIn} user={user} />
          <Users path="/users" toggleSidebar={this.toggleSidebar} loggedIn={loggedIn} />
        </Router>
      </div>
    );
  }

  componentDidMount() {
    // once page rendered, check session storage if user already logged in
    this.checkLoggedInStorage()
  }

  toggleSidebar = () => {
    let { sidebarClassName } = this.state;
    sidebarClassName = sidebarClassName === 'sidebar' ? 'sidebar active' : 'sidebar'
    this.setState({ sidebarClassName });
  }

  login = (username) => {
    // make a call to database and check if username exists
    api.getUserByUsername(username)
      .then(user => {
        // user returned if successful, update state and session storage
        this.setState({ user, loggedIn: true })
        sessionStorage.setItem('state', JSON.stringify(this.state))
      })
      .catch(err => console.log(err));
    // if not successful, log error "user does not exisit"
  }

  logout = () => {
    // clear user from session storage
    sessionStorage.removeItem('state');

    // reset state user to empty and loggedIn as false
    this.setState({
      user: {},
      loggedIn: false,
    });
  }

  // function to check if already logged in
  checkLoggedInStorage = () => {
    const storedState = sessionStorage.getItem('state')

    // if user already logged in then storedstate will be true
    if (storedState) {
      // if true, setstate to that of session storage
      this.setState(JSON.parse(storedState));
    }
    // if false do nothing
  }
}

export default App;
