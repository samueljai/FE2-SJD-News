import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Articles.css'
import { navigate } from '@reach/router';
import * as api from '../Utils/api'

class SingleArticle extends Component {
  state = {
    loading: true,
    article: {},
    article_id: ''
  }

  render() {
    const { toggleSidebar } = this.props;
    const { article, loading } = this.state

    if (!loading) {
      return (
        <React.Fragment>
          <Header toggleSidebar={toggleSidebar} heading={article.title} />
          <main>
            <div className="articleCard">
              <img></img>
              <div className="articleInfo">
                <p>{article.topic}</p>
                <p>{article.created_at}</p>
                <p>{article.author}</p>
                <p>{article.comment_count} Comments</p>
              </div>
              <div className="article">
                <p>{article.body}</p>
              </div>
            </div>
          </main>
        </React.Fragment>
      )
    }
    else return (<p className="loading">is loading...</p>);
  }

  componentDidMount() {
    this.fetchArticleById();
  }

  fetchArticleById = () => {
    const { article_id } = this.props;
    api.getArticleById(article_id)
      .then(article => {
        this.setState({ article, loading: false, article_id })
      })
      .catch(err => console.log(err))
  }
}

export default SingleArticle;