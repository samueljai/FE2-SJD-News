import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Users.css'
import ListUsers from './ListUsers';
import * as api from '../Utils/api'

class Users extends Component {
  state = {
    loading: true,
    users: []
  }
  render() {
    const { toggleSidebar } = this.props;
    const { users, loading } = this.state

    if (!loading) {
      return (
        <React.Fragment>
          <Header toggleSidebar={toggleSidebar} heading="Users" />
          <main>
            <ListUsers users={users} />
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
}

export default Users;