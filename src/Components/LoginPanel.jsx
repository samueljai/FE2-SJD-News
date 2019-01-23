import React, { Component } from 'react';

class LoginPanel extends Component {
  state = {
    username: ''
  }

  render() {
    const { username } = this.state;

    // user & loggedIn is passed down from the props
    const { user, loggedIn } = this.props;

    // check if loggedIn is true 
    return loggedIn ?
      (
        // if logged in, return username and a little user icon, along with log out button
        <React.Fragment>
          <p>Welcome: {user.username}</p>
          <div>Icon</div> {/*clicking on the icon should take you to the individual users page*/}
          <button onClick={() => this.handleLogout()}>Logout</button>
        </React.Fragment>
      )
      : (
        // else, if not logged in return form to log in 
        <form className="loginPanel" onSubmit={this.handleSubmit}>
          <input type="text" id="username" onChange={this.handleChange} value={username} placeholder="Enter Username:" required />
          <button type="submit">Login</button>
        </form>
      )
  }

  // when the field is changed it will update the state with the username
  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    })
  }

  // function called when enter has been pressed in the text box, or the submit button has been clicked
  handleSubmit = (event) => {
    event.preventDefault();
    // get username from the state
    const { username } = this.state
    // log in function passed through the props
    const { login } = this.props
    login(username);
    this.setState({
      username: ''
    });
  }

  handleLogout = () => {
    // log out function passed through the props
    const { logout } = this.props
    logout()
    // reset the username to empty string and logged in as false
    this.setState({
      username: ''
    });
  }
}

export default LoginPanel;