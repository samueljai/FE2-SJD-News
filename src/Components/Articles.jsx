import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Articles.css'
import ListArticles from './ListArticles';
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
            <ListArticles articles={articles} />
          </main>
        </React.Fragment>
      )
    }
    else return (<p className="loading">is loading...</p>);
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    const { slug } = this.props;
    api.getArticles(slug)
      .then(articles => {
        this.setState({ articles, loading: false, slug })
      })
      .catch(err => console.log(err))
  }
}

export default Articles;