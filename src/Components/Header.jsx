import React from 'react';
import '../CSS/Header.css'

const Header = ({ heading, display }) => {
  const headerClass = display ? 'mainHeader active' : 'mainHeader';

  return (
    <header className={headerClass} >
      <h1>{heading}</h1>
    </header>
  );
};

export default Header;