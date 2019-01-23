import React, { Component } from 'react';
import Header from './Header';
import '../CSS/NewArticle.css';
import * as api from '../Utils/api';

class NewArticle extends Component {

  state = {
    loading: true,
    slugs: [],
    selectedTopic: "New"
  }

  render() {
    const { slugs, loading, selectedTopic } = this.state
    const { topic, toggleSidebar, loggedIn } = this.props;

    const heading = (!topic) ?
      'Create a New Article'
      : `Create a New ${topic} Article`;

    if (!loading) {
      return (
        <React.Fragment>
          <Header toggleSidebar={toggleSidebar} heading={heading} loggedIn={loggedIn} />
          <main className="newArticleMain">
            <div>
              <p>Select a Topic:</p>
              <select autoFocus required defaultValue={topic} onChange={this.handleTopicSelect} >
                <option value="New">New Topic</option>
                {slugs.map(slug => {
                  return (<option key={slug} value={slug}>{slug}</option>)
                })}
              </select >
            </div>
            {(selectedTopic === "New") && <form className="newTopicForm"> if New Topic is selected:
            <p>New Topic Name Field</p>
              <p>New Topic Description Field</p>
            </form>}

            <form className="newArticleForm">
              <p>Article Title:</p>
              <p>Article:</p>
            </form>
          </main>
        </React.Fragment>
      )
    }
    else return (<p className="loading">is loading...</p>);
  }

  componentDidMount() {
    // gets topics for dropdown menu
    this.fetchTopics();
    // gets the topic from the url
    const { topic } = this.props
    // if topic exists in url then it changes selectedTopic in the state with it
    if (topic) {
      this.setState({
        selectedTopic: topic
      })
    }
  }

  // fetches all topics and creates a new slugs array in the state to use for the drop down
  fetchTopics = () => {
    api.getTopics()
      .then(topics => {
        const slugs = topics.map((topic) => topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)).sort()
        this.setState({ slugs, loading: false })
      })
      .catch(err => console.log(err))
  }

  handleTopicSelect = event => {
    const { value } = event.target;
    this.setState({
      selectedTopic: value,
    });
  };
}

export default NewArticle;