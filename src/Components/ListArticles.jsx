import React from 'react';
import { navigate } from '@reach/router';

const ListArticles = ({ articles }) => {
  return (
    <React.Fragment>
      {articles.map(article => (
        <div className="card" onClick={() => handleClick(article.title)}>
          <h3>{article.title}</h3>
        </div>
      ))}
    </React.Fragment>
  );
};

const handleClick = slug => {
  navigate(`/topics/${slug}/articles`);
}

export default ListArticles;