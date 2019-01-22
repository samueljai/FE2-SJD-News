import React from 'react';
import { navigate } from '@reach/router';

const ListTopics = ({ topics }) => {
  return (
    <ul>
      {topics.map(topic => (
        <li key={`${topic.slug}`} onClick={() => handleClick(topic.slug)}>
          <h3>{topic.slug}</h3>
          <p>
            Description: {topic.description}
          </p>
        </li>
      ))
      }
    </ul >
  );
};

const handleClick = slug => {
  navigate(`/topics/${slug}/articles`);
}

export default ListTopics;