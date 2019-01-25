import React from 'react';
import Header from './Header';
import '../CSS/Homepage.css'
import logo from '../img/sjd_news_logo.png'

const Homepage = ({ toggleSidebar }) => {

  // get articles from the api
  // order by votes to get the most popular
  // use the description for the top one and find an image to match
  // display that image and article details on the homepage
  return (
    <React.Fragment>
      <Header toggleSidebar={toggleSidebar} display={false} heading="" />
      <main className="homepage">
        <h2>Welcome to</h2>
        <img src={logo} alt="sjd news logo" ></img>
      </main>
    </React.Fragment>
  );
};

export default Homepage;
