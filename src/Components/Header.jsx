import React, { Component } from 'react';
import '../CSS/Header.css'

class Header extends Component {

  state = {
    active: false
  }

  render() {
    const { heading } = this.props;
    const buttonClass = this.state.active ? 'menu-button active' : 'menu-button';
    return (
      <header className='mainHeader'>
        <button className={buttonClass} onClick={this.toggle}>
          <span className='bar'></span>
        </button>
        <h1>{heading}</h1>
      </header>
    );
  }

  toggle = () => {
    const { toggleSidebar } = this.props;
    toggleSidebar()
    this.setState({
      active: !this.state.active
    });
  }
}

export default Header;