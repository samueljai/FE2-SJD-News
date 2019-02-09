import React, { Component } from 'react';
import { navigate } from '@reach/router';

class ErrorPage extends Component {

  render() {
    const { err } = this.props;
    console.log(err)
    return (
      <main>
        <h2>ERROR PAGE</h2>
        <h3>Your error is: </h3>
        <button onClick={() => this.handleClick()}> Return to Home</button>
      </main>
    );
  }

  handleClick = () => {
    navigate(`/`);
  }

}

export default ErrorPage;