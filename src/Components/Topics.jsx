import React, { Component } from 'react';
import Header from './Header';
import '../CSS/Topics.css'
import ListTopics from './ListTopics';

class Topics extends Component {

  state = {
    loading: true,
    topics: [
      { description: 'Code is love, code is life', slug: 'coding' },
      { description: 'FOOTIE!', slug: 'football' },
      { description: 'Hey good looking, what you got cooking?', slug: 'cooking' },
    ]
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchTopics();
    }
  }

  fetchTopics = () => {
    // api.getTopics()
    //   .then(topics => this.setState({ topics, loading: false }))
    //   .catch(err => console.log(err))
    this.setState({ loading: false })
  }
}

export default Topics;