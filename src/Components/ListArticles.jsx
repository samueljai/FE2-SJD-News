import React from 'react';
import { navigate } from '@reach/router';

const ListArticles = ({ articles }) => {

  return (
    <React.Fragment>
      {articles.map(article => {
        return (
          <div className="card" key={article.article_id} onClick={() => handleClick(article.article_id)}>
            <p>{new Date(new Date(article.created_at).toJSON()).toUTCString().slice(5, 16)}</p>
            <h3>{article.title}</h3>
            <p>by {article.author}</p>
            <h4>{article.topic}</h4>
          </div>
        )
      })}
    </React.Fragment>
  );
};

const handleClick = slug => {
  navigate(`/topics/${slug}/articles`);
}

export default ListArticles;