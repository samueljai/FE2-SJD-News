import React from 'react';
import { navigate } from '@reach/router';

const ListArticles = ({ articles }) => {
  return (
    <ul>
      {articles.map(article => (
        <li key={`${article.created_at}`} onClick={() => handleClick(article.title)}>
          <h3>{article.title}</h3>
          <p>
            Description: {article.body}
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

export default ListArticles;