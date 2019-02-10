import React, { Component } from 'react';
import { navigate } from '@reach/router';
import '../CSS/ErrorPage.css'

class ErrorPage extends Component {

  render() {
    const { err } = this.props;
    return (
      <main className="errorPage">
        <h2>ERROR!</h2>
        {!err && <h3>Oops!! Nothing to see here...sorry we couldn't find that page!</h3>}
        <h3>{err}</h3>
        <button onClick={() => this.handleClick()}>Return Home</button>
      </main>
    );
  }

  handleClick = () => {
    navigate(`/`);
  }

}

export default ErrorPage;