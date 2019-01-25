import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Users.css'
import { navigate } from '@reach/router';
import * as api from '../Utils/api';
import ErrorPage from './ErrorPage';

class Users extends Component {
  state = {
    loading: true,
    users: [],
    err: ''
  }
  render() {
    const { toggleSidebar } = this.props;
    const { err, users, loading } = this.state

    if (err) return (<ErrorPage err={err} />)
    else if (!loading) {
      return (
        <React.Fragment>
          <Header toggleSidebar={toggleSidebar} heading="Users" display={true} />
          <main>
            {users.map(user => (
              <div className="card" key={user.username} onClick={() => this.handleClick(user.username)}>
                <h3>{user.username}</h3>
                <p>name: {user.name}</p>
                <img src={user.avatar_url} alt={`${user.username}'s avatar`} />
              </div>
            ))}
          </main>
        </React.Fragment>
      )
    }
    else return (<p className="loading">is loading...</p>);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    api.getUsers()
      .then(users => this.setState({ users, loading: false }))
      .catch(err => console.log(err))
  }

  handleClick = username => {
    navigate(`/user/${username}`);
  }
}

export default Users;