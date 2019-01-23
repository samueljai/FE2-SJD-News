import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Articles.css'
import { navigate } from '@reach/router';
import * as api from '../Utils/api';
import 'react-dropdown/style.css'

class Articles extends Component {

  state = {
    loading: true,
    articles: [],
    page: 1,
    isLastPage: false,
    sort_by: 'created_at',
    asc_order: false,
  }

  render() {
    const { toggleSidebar, topic } = this.props;
    const { articles, loading, page, isLastPage, sort_by, asc_order } = this.state
    const heading = topic ? `${topic.charAt(0).toUpperCase() + topic.slice(1)} Articles` : 'Articles'

    if (!loading) {
      return (
        <React.Fragment>
          <Header toggleSidebar={toggleSidebar} heading={heading} />
          <main>
            <div>
              <button onClick={() => this.updatePageNumber(-1)} disabled={page === 1}>Previous</button>
              <button onClick={() => this.updatePageNumber(1)} disabled={isLastPage}>Next</button>
              <select value={sort_by} onChange={this.handleChange} >
                <option default value="">Sort By:</option>
                <option key="created_at" value="created_at">Date Created</option>
                <option key="comment_count" value="comment_count">Comments</option>
                <option key="votes" value="votes">Votes</option>
              </select >
            </div>
            {articles.map(article => {
              return (
                <div className="card" key={article.article_id} onClick={() => this.handleClick(article.article_id)}>
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
    if (topicUpdated || sortByUpdated) this.resetPageNumber();
    if (sortByUpdated || pageUpdated || (topicUpdated && this.state.page === 1)) {
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
      .catch(err => console.log(err))
    api.getArticles(topic, page + 1, sort_by, asc_order)
      .then(articles => {
        if (!articles.length) this.setState({ isLastPage: true, loading: false })
        else this.setState({ isLastPage: false, loading: false })
      })
      .catch(err => this.setState({ isLastPage: true, loading: false }))
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

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      sort_by: value,
    });
  };
}

export default Articles;