import React from 'react';
import '../CSS/NavBar.css';
import { Link } from '@reach/router'
import LoginPanel from './LoginPanel';

const NavBar = ({ toggleSidebar, user, loggedIn, login, logout }) => {
  return (
    <React.Fragment>
      <nav className="navBar" onClick={() => toggleSidebar()}>
        <LoginPanel user={user} loggedIn={loggedIn} login={login} logout={logout} />
        <Link className="navListItem" to="/" onClick={() => toggleSidebar()}>Home</Link>
        <Link className="navListItem" to="/topics" onClick={() => toggleSidebar()}> Topics</Link >
        <Link className="navListItem" to="/articles" onClick={() => toggleSidebar()}> Articles</Link >
        <Link className="navListItem" to="/users" onClick={() => toggleSidebar()}> Users</Link >
      </nav>
    </React.Fragment>
  );
};

export default NavBar;