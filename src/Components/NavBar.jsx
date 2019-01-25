import React from 'react';
import '../CSS/NavBar.css';
import { Link } from '@reach/router'
import LoginPanel from './LoginPanel';

const NavBar = ({ toggleSidebar, user, loggedIn, login, logout }) => {
  return (
    <React.Fragment>
      <nav className="navBar">
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
          <p>GitHub | LinkedIn | Twitter</p>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;