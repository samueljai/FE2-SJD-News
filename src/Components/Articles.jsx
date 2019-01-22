import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Articles.css'
import { navigate } from '@reach/router';
import * as api from '../Utils/api'

class Articles extends Component {

  state = {
    loading: true,
    articles: [],
    topic: ''
  }

  render() {
    const { toggleSidebar, topic } = this.props;
    const { articles, loading } = this.state
    const heading = topic ? `${topic.charAt(0).toUpperCase() + topic.slice(1)} Articles` : 'Articles'

    if (!loading) {
      return (
        <React.Fragment>
          <Header toggleSidebar={toggleSidebar} heading={heading} />
          <main>
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

    if (topicUpdated) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic } = this.props;
    api.getArticles(topic)
      .then(articles => {
        this.setState({ articles, loading: false, topic })
      })
      .catch(err => console.log(err))
  }

  handleClick = article_id => {
    navigate(`/articles/${article_id}`);
  }
}

export default Articles;