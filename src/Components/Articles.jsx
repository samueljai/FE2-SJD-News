import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Articles.css'
import { navigate } from '@reach/router';
import * as api from '../Utils/api';
import 'react-dropdown/style.css'
import ErrorPage from './ErrorPage';

class Articles extends Component {

  state = {
    loading: true,
    articles: [],
    page: 1,
    isLastPage: false,
    sort_by: 'created_at',
    asc_order: false,
    err: ""
  }

  render() {
    const { toggleSidebar, topic, loggedIn } = this.props;
    const { err, articles, loading, page, isLastPage, sort_by, asc_order } = this.state
    const heading = topic ? `${topic.charAt(0).toUpperCase() + topic.slice(1)} Articles` : 'Articles'

    if (err) return (<ErrorPage err={err} />)
    else if (!loading) {
      return (
        <React.Fragment>
          <Header toggleSidebar={toggleSidebar} heading={heading} loggedIn={loggedIn} handleNewArticle={this.handleNewArticle} display={true} />
          <main>
            <div className="subNavTop">
              <select value={sort_by} onChange={this.handleSortChange} >
                <option default value="">Sort By:</option>
                <option key="created_at" value="created_at">Date Created</option>
                <option key="comment_count" value="comment_count">Comments</option>
                <option key="votes" value="votes">Votes</option>
              </select >
              <select value={asc_order} onChange={this.handleOrderChange} >
                <option default value="">Order:</option>
                <option key="desc" value="false">Descening</option>
                <option key="asc" value="true">Ascending</option>
              </select >
            </div>
            {articles.map(article => {
              return (
                <div className="card articleCard" key={article.article_id} onClick={() => this.handleClick(article.article_id)}>
                  <p>{new Date(new Date(article.created_at).toJSON()).toUTCString().slice(5, 16)}</p>
                  <h3>{article.title}</h3>
                  <p>
                    by {article.author}<br></br>
                    Comments: {article.comment_count}<br></br>
                    Votes: {article.votes}
                  </p>
                  <h4>{article.topic}</h4>
                </div>
              )
            })}
            <div className="subNavBottom">
              <button onClick={() => this.updatePageNumber(-1)} disabled={page === 1}>{"<"}</button>
              <p>Page: {page}</p>
              <button onClick={() => this.updatePageNumber(1)} disabled={isLastPage}>{">"}</button>
            </div>
          </main>
        </React.Fragment>
      )
    }
    else return (<p className="loading">is loading...</p>);
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const topicUpdated = prevProps.topic !== this.props.topic;
    const pageUpdated = prevState.page !== this.state.page;
    const sortByUpdated = prevState.sort_by !== this.state.sort_by;
    const orderUpdated = prevState.asc_order !== this.state.asc_order;
    if (topicUpdated || sortByUpdated) this.resetPageNumber();
    if (orderUpdated || sortByUpdated || pageUpdated || (topicUpdated && this.state.page === 1)) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic } = this.props;
    const { page, sort_by, asc_order } = this.state;
    api.getArticles(topic, page, sort_by, asc_order)
      .then(articles => {
        this.setState({ articles })
      })
      .catch(err => {
        this.setState({ err: err })
      })
    api.getArticles(topic, page + 1, sort_by, asc_order)
      .then(articles => {
        if (!articles.length) this.setState({ isLastPage: true, loading: false })
        else this.setState({ isLastPage: false, loading: false })
      })
      .catch(err => this.setState({ err, isLastPage: true, loading: false }))
  }

  handleClick = article_id => {
    navigate(`/articles/${article_id}`);
  }

  updatePageNumber = direction => {
    this.setState(({ page }) => ({
      page: page + direction
    }))
  }

  resetPageNumber = () => {
    this.setState({ page: 1 })
  }

  handleSortChange = event => {
    const { value } = event.target;
    this.setState({
      sort_by: value,
    });
  };

  handleOrderChange = event => {
    const { value } = event.target;
    this.setState({
      asc_order: value,
    });
  };

  handleNewArticle = () => {
    const { topic } = this.props;
    const URL = topic ? `/new_article/${topic.charAt(0).toUpperCase() + topic.slice(1)}` : `/new_article/`
    navigate(URL)
  }
}

export default Articles;