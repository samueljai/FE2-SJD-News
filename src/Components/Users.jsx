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
    const { err, users, loading } = this.state

    if (err) return (<ErrorPage err={err} />)
    if (loading) return (<p className="loading">is loading...</p>);
    return (
      <React.Fragment>
        <Header heading="Users" display={true} />
        <main className="usersMain">
          {users.map(user => (
            <div className="card userCard" key={user.username} onClick={() => this.handleClick(user.username)}>
              <div className="userImg">
                <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-128.png" alt={`${user.username}'s avatar`} />
              </div>
              <div>
                <h3>{user.username}</h3>
                <p>Name: {user.name}</p>
              </div>
            </div>
          ))}
        </main>
      </React.Fragment>
    )
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    api.getUsers()
      .then(users => this.setState({ users, loading: false }))
      .catch(err => {
        this.setState({ err: err })
      })
  }

  handleClick = username => {
    navigate(`/user/${username}`);
  }
}

export default Users;