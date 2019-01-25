import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Topics.css'
import { navigate } from '@reach/router';
import * as api from '../Utils/api'


class Topics extends Component {

  state = {
    loading: true,
    topics: []
  }

  render() {
    const { toggleSidebar } = this.props
    const { topics, loading } = this.state

    if (!loading) {
      return (
        <React.Fragment>
          <Header toggleSidebar={toggleSidebar} heading="Topics" display={true} />
          <main>
            {topics.map(topic => (
              <div className="card topicCard" key={topic.slug} onClick={() => this.handleClick(topic.slug)}>
                <h3>{topic.slug}</h3>
                <p>Description: {topic.description}</p>
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
      .catch(err => console.log(err))
  }

  handleClick = topic => {
    navigate(`/topics/${topic}/articles`);
  }
}

export default Topics;