import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Articles.css'
import { navigate } from '@reach/router';
import * as api from '../Utils/api'

class Articles extends Component {

  state = {
    loading: true,
    articles: [],
    slug: ''
  }

  render() {
    const { toggleSidebar, slug } = this.props;
    const { articles, loading } = this.state
    const heading = slug ? `${slug.charAt(0).toUpperCase() + slug.slice(1)} Articles` : 'Articles'

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
    const topicUpdated = prevProps.slug !== this.props.slug;

    if (topicUpdated) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { slug } = this.props;
    api.getArticles(slug)
      .then(articles => {
        this.setState({ articles, loading: false, slug })
      })
      .catch(err => console.log(err))
  }

  handleClick = slug => {
    navigate(`/topics/${slug}/articles`);
  }
}

export default Articles;