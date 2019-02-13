import React from 'react';
import Header from './Header';
import '../CSS/Homepage.css'
import logo from '../img/sjd_news_logo.png'

const Homepage = () => {

  // To-Do:
  // get articles from the api
  // order by votes to get the most popular
  // use the description for the top one and find an image to match
  // display that image and article details on the homepage

  return (
    <React.Fragment>
      <Header display={false} heading="" />
      <main className="homepage">
        <div className="infoBar">
          <p>To log in click on Users in the navation bar, pick a user and enter their username and click Login.</p>
          <p>You do not need to enter a password.</p>
        </div>
        <div className="welcome">
          <h2>Welcome to</h2>
          <img src={logo} alt="sjd news logo" ></img>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Homepage;
