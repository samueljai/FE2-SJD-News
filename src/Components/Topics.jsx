import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Topics.css'
import { navigate } from '@reach/router';
import * as api from '../Utils/api'
import ErrorPage from './ErrorPage';


class Topics extends Component {

  state = {
    loading: true,
    topics: [],
    err: "",
  }

  render() {
    const { topics, loading, err } = this.state

    if (err) return (<ErrorPage err={err} />)
    else if (!loading) {
      return (
        <React.Fragment>
          <Header heading="Topics" display={true} />
          <main className="topicMain">
            {topics.map(topic => (
              <div className="card topicCard" key={topic.slug} onClick={() => this.handleClick(topic.slug)}>
                <h3>{topic.slug.toUpperCase()}</h3>
                <h4>IMAGE HERE</h4>
                <h2>{topic.description.toUpperCase()}</h2>

              </div>
            ))}
          </main>
        </React.Fragment>
      )
    }
    else return (<p className="loading">is loading...</p>);
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics()
      .then(topics => this.setState({ topics, loading: false }))
      .catch(err => {
        this.setState({ err: err })
      })
  }

  handleClick = topic => {
    navigate(`/topics/${topic}/articles`);
  }
}

export default Topics;