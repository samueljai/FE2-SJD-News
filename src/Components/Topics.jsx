import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Topics.css'
import ListTopics from './ListTopics';
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
          <Header toggleSidebar={toggleSidebar} heading="Topics" />
          <main>
            <ListTopics topics={topics} />
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
}

export default Topics;