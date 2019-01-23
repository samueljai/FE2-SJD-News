import React, { Component } from 'react';
import Header from './Header';
import Comments from './Comments';
import { navigate } from '@reach/router';
import '../CSS/Articles.css'
import * as api from '../Utils/api'
import Voting from './Voting';

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
  }

  render() {
    const { toggleSidebar, loggedIn, user: { username } } = this.props;
    const { article, articlesLoading, comments, commentCount, commentsLoading, page, isLastPage, newComment } = this.state

    if (!articlesLoading && !commentsLoading) {
      return (
        <React.Fragment>
          <Header toggleSidebar={toggleSidebar} heading={article.title} />
          <main>
            <div className="articleCard">
              <div className="articleInfo">
                <p>{article.topic}</p>
                <p>{new Date(new Date(article.created_at).toJSON()).toUTCString().slice(5, 16)}</p>
                <p>{article.author}</p>
                <p>{commentCount} Comments</p>
                <Voting votes={article.votes} article_id={article.article_id} />
                {article.author === username &&
                  (<button onClick={() => this.deleteArticle(article.article_id)} >Delete</button>)
                }
              </div>
              <div className="articlBody">
                <p>{article.body}</p>
              </div>
              <div className="commentsBox">
                <button onClick={() => this.updatePageNumber(-1)} disabled={page === 1}>Previous</button>
                <button onClick={() => this.updatePageNumber(1)} disabled={isLastPage}>Next</button>
                <h3>{commentCount} Comments</h3>
                {(loggedIn) &&
                  <form onSubmit={this.handleSubmit}> New Comment:
                    <textarea required id="newComment" value={newComment} onChange={this.handleChange} placeholder="Enter a new comment..." />
                    <button type="submit">Submit Comment</button>
                  </form>
                }
                <Comments article_id={article.article_id} comments={comments} username={username} deleteComment={this.deleteComment} updateCommentVotes={this.updateCommentVotes} />
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
    const commentsUpdated = prevState.comments.length !== this.state.comments.length;

    if (articleUpdated) this.resetPageNumber();
    if (commentsUpdated || pageUpdated || (articleUpdated && this.state.page === 1)) {
      this.fetchCommentsByArticleId();
    }
  }

  fetchArticleById = () => {
    const { article_id } = this.props;
    api.getArticleById(article_id)
      .then(article => {
        this.setState({ article, commentCount: article.comment_count, articlesLoading: false })
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
        this.setState(({ comments, commentCount }) => ({
          comments: comments.concat(comment),
          commentCount: commentCount + 1,
          newComment: ""
        }))
      })
      .catch(err => console.log(err))
  }

  deleteComment = (comment_id) => {
    const { article_id } = this.props;
    api.deleteCommentByArticleId(article_id, comment_id)
      .then(() => {
        this.setState(({ commentCount }) => ({
          commentCount: commentCount - 1,
        }))
        this.fetchCommentsByArticleId()
      })
      .catch(err => console.log(err));
  };

  deleteArticle = (article_id) => {
    api.deleteArticle(article_id)
      .then(() => {
        // navigate to the articles page once deleted
        navigate(`/articles`);
      })
      .catch(err => console.log(err));
  };

  // updateCommentVotes = (article_id, direction, comment_id) => {
  //   api
  //     .updateVotesByCommentId(article_id, direction, comment_id)
  //     .then(comment => this.loadComments(article_id))
  //     .catch(error => this.setState({ error }));
  // };

  // updateArticleVote = (articleId, vote) => {
  //   const { articles } = this.state;

  //   api
  //     .updateVotesByArticleId(articleId, vote)
  //     .then(updatedArticle => {
  //       const updatedArticles = articles.map(article => {
  //         if (article.article_id === updatedArticle.article_id) {
  //           return { ...article, votes: updatedArticle.votes };
  //         } else {
  //           return article;
  //         }
  //       });

  //       this.setState({ articles: updatedArticles });
  //     })
  //     .catch(error => this.setState({ error }));
  // };
}

export default SingleArticle;