import React from 'react';
import { navigate } from '@reach/router';


const ListTopics = ({ topics }) => {
  return (
    <React.Fragment>
      {topics.map(topic => (
        <div className="card" key={topic.slug} onClick={() => handleClick(topic.slug)}>
          <h3>{topic.slug}</h3>
          <p>Description: {topic.description}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

const handleClick = slug => {
  navigate(`/topics/${slug}/articles`);
}

export default ListTopics;