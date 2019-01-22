import React, { Component } from 'react';
import Header from './Header';
import Comments from './Comments';
import '../CSS/Articles.css'
import { navigate } from '@reach/router';
import * as api from '../Utils/api'

class SingleArticle extends Component {
  state = {
    articlesLoading: true,
    commentsLoading: true,
    article: {},
    comments: [],
    page: 1,
    isLastPage: false,
  }

  render() {
    const { toggleSidebar } = this.props;
    const { article, articlesLoading, comments, commentsLoading, page, isLastPage } = this.state

    if (!articlesLoading && !commentsLoading) {
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
                <button onClick={() => this.updatePageNumber(-1)} disabled={page === 1}>Previous</button>
                <button onClick={() => this.updatePageNumber(1)} disabled={isLastPage}>Next</button>
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
    this.fetchArticleById();
    this.fetchCommentsByArticleId();
  }

  componentDidUpdate(prevProps, prevState) {
    const articleUpdated = prevProps.article_id !== this.props.article_id;
    const pageUpdated = prevState.page !== this.state.page;
    if (articleUpdated) this.resetPageNumber();
    if (pageUpdated || (articleUpdated && this.state.page === 1)) {
      this.fetchCommentsByArticleId();
    }
  }

  fetchArticleById = () => {
    const { article_id } = this.props;
    api.getArticleById(article_id)
      .then(article => {
        this.setState({ article, articlesLoading: false })
      })
      .catch(err => console.log(err))
  }

  fetchCommentsByArticleId = () => {
    const { article_id } = this.props;
    const { page } = this.state;
    api.getCommentsByArticleId(article_id, page)
      .then(comments => {
        this.setState({ comments, commentsLoading: false })
      })
      .catch(err => console.log(err))
    api.getCommentsByArticleId(article_id, page + 1)
      .then(comments => {
        if (!comments.length) this.setState({ isLastPage: true, commentsLoading: false })
        else this.setState({ isLastPage: false, commentsLoading: false })
      })
      .catch(err => this.setState({ isLastPage: true, loading: false }))
  }

  updatePageNumber = direction => {
    this.setState(({ page }) => ({
      page: page + direction
    }))
  }

  resetPageNumber = () => {
    this.setState({ page: 1 })
  }
}

export default SingleArticle;