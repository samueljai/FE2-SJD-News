import React, { Component } from 'react';
import Header from './Header';
import Comments from './Comments';
import '../CSS/Articles.css'
import { navigate } from '@reach/router';
import * as api from '../Utils/api'

class SingleArticle extends Component {
  state = {
    loading: true,
    article: {},
    article_id: '',
    comments: []
  }

  render() {
    const { toggleSidebar } = this.props;
    const { article, loading, comments } = this.state

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
              <div className="articlBody">
                <p>{article.body}</p>
              </div>
              <div className="commentsBox">
                <h3>{article.comment_count} Comments</h3>
                <Comments comments={comments} />
              </div>
            </div>
          </main>
        </React.Fragment>
      )
    }
    else return (<p className="loading">is loading...</p>);
  }

  componentDidMount() {
    this.fetchArticleByIdandComments();
  }

  fetchArticleByIdandComments = () => {
    const { article_id } = this.props;
    api.getArticleById(article_id)
      .then(article => {
        this.setState({ article, article_id }, () => {
          api.getCommentsByArticleId(article_id)
            .then(comments => {
              this.setState({ comments, loading: false })
            })
            .catch(err => console.log(err))
        })
      })
      .catch(err => console.log(err))
  }
}

export default SingleArticle;