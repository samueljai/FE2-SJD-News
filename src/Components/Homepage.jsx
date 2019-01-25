import React from 'react';
import Header from './Header';
import '../CSS/Homepage.css'

const Homepage = ({ toggleSidebar }) => {

  // get articles from the api
  // order by votes to get the most popular
  // use the description for the top one and find an image to match
  // display that image and article details on the homepage
  return (
    <React.Fragment>
      <Header toggleSidebar={toggleSidebar} display={false} heading="" />
      <main>Homepage</main>
    </React.Fragment>
  );
};

export default Homepage;
