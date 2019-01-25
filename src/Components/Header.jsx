import React, { Component } from 'react';
import '../CSS/Header.css'

class Header extends Component {

  render() {
    const { heading, loggedIn, display } = this.props;
    const headerClass = display ? 'mainHeader active' : 'mainHeader';

    return (
      <header className={headerClass} >
        <h1>{heading}</h1>
        {(heading.includes('Articles') && (loggedIn)) && <button className="newArticleButton" onClick={() => this.handleClick()}>New Article</button>}
      </header>
    );
  }

  // function when new button is called
  handleClick = () => {
    const { handleNewArticle } = this.props;
    handleNewArticle();
  }
}

export default Header;