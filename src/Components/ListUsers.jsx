import React from 'react';
import { navigate } from '@reach/router';

const ListUsers = ({ users }) => {
  return (
    <React.Fragment>
      {users.map(user => (
        <div className="card" onClick={() => handleClick(user.username)}>
          <h3>{user.username}</h3>
          <p>name: {user.name}</p>
          <img src={user.avatar_url} alt={`${user.username}'s avatar`} />
        </div>
      ))}
    </React.Fragment>
  );
};

const handleClick = username => {
  navigate(`/user/${username}`);
}

export default ListUsers;