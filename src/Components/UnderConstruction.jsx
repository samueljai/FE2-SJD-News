import React, { Component } from 'react';
import { navigate } from '@reach/router';
import '../CSS/ErrorPage.css'

class UnderConstruction extends Component {

  render() {
    const { err } = this.props;
    return (
      <main className="errorPage">
        <h2>UnderConstruction!</h2>
        {!err && (
          <div>
            <h3>THIS PAGE IS UNDER CONSTRUCTION!</h3>
            <h3>COME BACK SOON!</h3>
          </div>
        )}
        <h3>{err}</h3>
        <button onClick={() => this.handleClick()}>Return Home</button>
      </main>
    );
  }

  handleClick = () => {
    navigate(`/`);
  }

}

export default UnderConstruction;