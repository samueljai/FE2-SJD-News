import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Users.css'
import ListUsers from './ListUsers';

class Users extends Component {
  state = {
    loading: true,
    users: [
      {
        username: 'tickle122',
        name: 'Tom Tickle',
        avatar_url: 'https://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg',
      },
      {
        username: 'grumpy19',
        name: 'Paul Grump',
        avatar_url: 'https://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg',
      },
      {
        username: 'happyamy2016',
        name: 'Amy Happy',
        avatar_url: 'https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729',
      },
      {
        username: 'cooljmessy',
        name: 'Peter Messy',
        avatar_url: 'https://i.imgur.com/WfX0Neu.jpg',
      },
      {
        username: 'weegembump',
        name: 'Gemma Bump',
        avatar_url: 'https://www.upandrunning.co.uk/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/m/r/mr-bump.jpg',
      },
      {
        username: 'jessjelly',
        name: 'Jess Jelly',
        avatar_url: 'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg',
      },
    ]
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
    // api.getUsers()
    //   .then(users => this.setState({ users, loading: false }))
    //   .catch(err => console.log(err))
    this.setState({ loading: false })
  }
}

export default Users;