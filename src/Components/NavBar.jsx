import React from 'react';
import '../CSS/NavBar.css';
import { Link } from '@reach/router'
import LoginPanel from './LoginPanel';
import logo from '../img/sjd_news_logo.png'

const NavBar = ({ toggleSidebar, user, loggedIn, login, logout }) => {
  return (
    <React.Fragment>
      <nav className="navBar">
        <Link to="/" onClick={() => toggleSidebar()}><img src={logo} alt="sjd news logo"></img></Link>
        <LoginPanel user={user} loggedIn={loggedIn} login={login} logout={logout} />
        <section className="navLinks">
          <Link className="navListItem" to="/" onClick={() => toggleSidebar()}>HOME</Link>
          <Link className="navListItem" to="/topics" onClick={() => toggleSidebar()}> TOPICS</Link >
          <Link className="navListItem" to="/articles" onClick={() => toggleSidebar()}> ARTICLES</Link >
          <Link className="navListItem" to="/users" onClick={() => toggleSidebar()}> USERS</Link >
        </section>
        <div className="footer">
          <h6>Developed by:</h6>
          <h4>Samuel Jai</h4>
          <h6>On A Full Stack Developer Journey</h6>
          <h4>© 2019</h4>
          <p><a href="https://github.com/samueljai" rel="noopener noreferrer" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/sam-desai" rel="noopener noreferrer" target="_blank">LinkedIn</a> | <a href="https://twitter.com/thisissamueljai" rel="noopener noreferrer" target="_blank">Twitter</a></p>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;