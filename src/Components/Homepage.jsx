import React from 'react';
import Header from './Header';
import '../CSS/Homepage.css'

const Homepage = ({ toggleSidebar }) => {

  return (
    <React.Fragment>
      <Header toggleSidebar={toggleSidebar} heading="" />
      <main>Homepage</main>
    </React.Fragment>
  );
};

export default Homepage;
