import React from 'react';
import { navigate } from '@reach/router';

const ListUsers = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.username} onClick={() => handleClick(user.username)}>
          <h3>{user.username}</h3>
          <p>
            name: {user.name}
          </p>
          <img src={user.avatar_url} alt={`${user.username}'s avatar`} />
        </li>
      ))}
    </ul>
  );
};

const handleClick = username => {
  navigate(`/user/${username}`);
}

export default ListUsers;