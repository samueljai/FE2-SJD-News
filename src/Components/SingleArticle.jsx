import React, { Component } from 'react';
import Header from './Header';
import Comments from './Comments';
import { navigate } from '@reach/router';
import '../CSS/SingleArticle.css'
import * as api from '../Utils/api'
import Voting from './Voting';
import ErrorPage from './ErrorPage';
import * as format from '../Utils/formatting'

class SingleArticle extends Component {
  state = {
    articlesLoading: true,
    commentsLoading: true,
    article: {},
    comments: [],
    commentCount: 0,
    page: 1,
    isLastPage: false,
    newComment: "",
    err: ''
  }

  render() {
    const { loggedIn, user: { username } } = this.props;
    const { err, article, articlesLoading, comments, commentCount, commentsLoading, page, isLastPage, newComment } = this.state

    if (err) return (<ErrorPage err={err} />)
    if (articlesLoading && commentsLoading) return (<p className="loading">is loading...</p>);
    return (
      <React.Fragment>
        <Header heading={article.title} display={false} />
        <main className="fullArticleMain">
          <div className="card fullArticleCard">
            <div className="fullArticleImg">
              <h1>{article.title.toUpperCase()}</h1>
              IMAGE HERE!
            </div>
            <div className="articleInfo1">
              <div className="box1">
                <p className="topic">{article.topic.toUpperCase()}</p>
                <p className="date">{new Date(new Date(article.created_at).toJSON()).toUTCString().slice(5, 16)}</p>
                <p className="author">by {article.author}</p>
              </div>
              <div className="box2">
                <p className="comments">Comments: {commentCount}</p>
                <p className="votes">Votes: {article.votes}</p>
              </div>
            </div>
            <div className="articleBody">
              <p>{format.formatText(article.body)}</p>
            </div>
            <div className="votingBox">
              <Voting votes={article.votes} article_id={article.article_id} />
              {article.author === username &&
                (<button className="deleteButton" onClick={() => this.deleteArticle(article.article_id)} >Delete Article</button>)
              }
            </div>
            <div className="commentsBox">
              <h3>{commentCount} Comments</h3>
              {(loggedIn) &&
                <form onSubmit={this.handleSubmit}>
                  <h4>Say Something:</h4>
                  <textarea required id="newComment" value={newComment} onChange={this.handleChange} placeholder="Enter a new comment..." />
                  <button type="submit">Post Comment</button>
                </form>
              }
              <Comments article_id={article.article_id} comments={comments} username={username} deleteComment={this.deleteComment} updateCommentVotes={this.updateCommentVotes} />
              <div className="subNavBottom">
                <button onClick={() => this.updatePageNumber(-1)} disabled={page === 1}>{"<"}</button>
                <p>Page: {page}</p>
                <button onClick={() => this.updatePageNumber(1)} disabled={isLastPage}>{">"}</button>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }

  componentDidMount() {
    this.fetchArticleById();
    this.fetchCommentsByArticleId();
  }

  componentDidUpdate(prevProps, prevState) {
    const articleUpdated = prevProps.article_id !== this.props.article_id;
    const pageUpdated = prevState.page !== this.state.page;
    const commentsUpdated = prevState.commentCount !== this.state.commentCount;

    if (commentsUpdated || articleUpdated) this.resetPageNumber();
    if (commentsUpdated || pageUpdated || (articleUpdated && this.state.page === 1)) {
      this.fetchCommentsByArticleId();
    }
  }

  fetchArticleById = () => {
    const { article_id } = this.props;
    api.getArticleById(article_id)
      .then(article => {
        this.setState({ article, commentCount: parseInt(article.comment_count), articlesLoading: false })
      })
      .catch(err => {
        this.setState({ err: err })
      })
  }

  fetchCommentsByArticleId = () => {
    const { article_id } = this.props;
    const { page } = this.state;
    api.getCommentsByArticleId(article_id, page)
      .then(comments => {
        this.setState({ comments, commentsLoading: false })
      })
      .catch(err => this.setState({ comments: [] }))
    api.getCommentsByArticleId(article_id, page + 1)
      .then(comments => {
        if (!comments.length) this.setState({ isLastPage: true, commentsLoading: false })
        else this.setState({ isLastPage: false, commentsLoading: false })
      })
      .catch(err => this.setState({ isLastPage: true, commentsLoading: false }))
  }

  updatePageNumber = direction => {
    this.setState(({ page }) => ({
      page: page + direction
    }))
  }

  resetPageNumber = () => {
    this.setState({ page: 1 })
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // get username from the state, articleId, username, body
    const { article_id, user: { username } } = this.props
    const { newComment } = this.state
    api.addCommentByArticleId(article_id, username, newComment)
      .then(comment => {
        this.setState(({ comments, commentCount }) => {
          return ({
            comments: comments.concat(comment),
            commentCount: commentCount + 1,
            newComment: ""
          })
        })
      })
      .catch(err => {
        this.setState({ err: err })
      })
  }

  deleteComment = (comment_id) => {
    const { article_id } = this.props;
    api.deleteCommentByArticleId(article_id, comment_id)
      .then(() => {
        this.setState(({ commentCount }) => ({
          commentCount: commentCount - 1,
        }))
      })
      .catch(err => {
        this.setState({ err: err })
      })
  };

  deleteArticle = (article_id) => {
    api.deleteArticle(article_id)
      .then(() => {
        // navigate to the articles page once deleted
        navigate(`/articles`);
      })
      .catch(err => {
        this.setState({ err: err })
      })
  };
}

export default SingleArticle;