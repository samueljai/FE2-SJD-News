import React from 'react';
import '../CSS/NavBar.css';
import { Link } from '@reach/router'

const NavBar = ({ toggleSidebar }) => {
  return (
    <nav className="navBar" onClick={() => toggleSidebar()}>
      <Link className="navListItem" to="/" onClick={() => toggleSidebar()}>Home</Link>
      <Link className="navListItem" to="/topics" onClick={() => toggleSidebar()}> Topics</Link >
      <Link className="navListItem" to="/articles" onClick={() => toggleSidebar()}> Articles</Link >
      <Link className="navListItem" to="/users" onClick={() => toggleSidebar()}> Users</Link >
    </nav>
  );
};

export default NavBar;