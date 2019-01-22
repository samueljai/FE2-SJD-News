import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Articles.css'
import { navigate } from '@reach/router';
import * as api from '../Utils/api'

class Articles extends Component {

  state = {
    loading: true,
    articles: [],
    topic: '',
    page: 1,
    isLastPage: false,
  }

  render() {
    const { toggleSidebar, topic } = this.props;
    const { articles, loading, page, isLastPage } = this.state
    const heading = topic ? `${topic.charAt(0).toUpperCase() + topic.slice(1)} Articles` : 'Articles'

    if (!loading) {
      return (
        <React.Fragment>
          <Header toggleSidebar={toggleSidebar} heading={heading} />
          <main>
            <button onClick={() => this.updatePageNumber(-1)} disabled={page === 1}>Previous</button>
            <button onClick={() => this.updatePageNumber(1)} disabled={isLastPage}>Next</button>
            {articles.map(article => {
              return (
                <div className="card" key={article.article_id} onClick={() => this.handleClick(article.article_id)}>
                  <p>{new Date(new Date(article.created_at).toJSON()).toUTCString().slice(5, 16)}</p>
                  <h3>{article.title}</h3>
                  <p>by {article.author}</p>
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
    if (topicUpdated) this.resetPageNumber();
    if (pageUpdated || (topicUpdated && this.state.page === 1)) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic } = this.props;
    const { page } = this.state;
    api.getArticles(topic, page)
      .then(articles => {
        console.log(articles)
        this.setState({ articles, topic })
      })
      .catch(err => console.log(err))
    api.getArticles(topic, page + 1)
      .then(articles => {
        console.log(articles)
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
}

export default Articles;