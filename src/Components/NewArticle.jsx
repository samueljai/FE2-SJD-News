import React, { Component } from 'react';
import Header from './Header';
import '../CSS/NewArticle.css';
import * as api from '../Utils/api';

class NewArticle extends Component {

  state = {
    loading: true,
    slugs: [],
    selectedTopic: "New",
    newTopicName: "",
    newTopicDesc: "",
    newArticleName: "",
    newArticleBody: "",
    newTopic: "",
    newArticleID: 0,
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
            <form onSubmit={this.handleSubmit} className="newArticleForm">
              {(selectedTopic === "New") &&
                <section className="newTopicSection"> New Topic Details:
                  <input type="text" required id="newTopicName" value={this.state.value} onChange={this.handleChange} placeholder="Enter a New Topic Title" />
                  <textarea required id="newTopicDesc" value={this.state.value} onChange={this.handleChange} placeholder="Enter a description for your new topic..." />
                </section>
              }
              <section className="newArticleSection"> New Article Details:
                <input type="text" required id="newArticleName" value={this.state.value} onChange={this.handleChange} placeholder="Enter a New Article Title" />
                <textarea required id="newArticleBody" value={this.state.value} onChange={this.handleChange} placeholder="Enter your new article..." />
              </section>
              <button type="submit">Publish new article</button>
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

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    })
  }

  // function called when enter has been pressed in the text box, or the submit button has been clicked
  handleSubmit = (event) => {
    event.preventDefault();
    // get information from the state
    const { newArticleBody, newArticleName, newTopicDesc, newTopicName, selectedTopic } = this.state;
    const { user: { username } } = this.props

    // if NEW topic has been selected, call addNewTopic first, then addNewArticle
    // if existing topic, then just addNewArticle
    if (selectedTopic === "New") {
      // call the post topic function in the api file, pass in the slug and description
      // returns the added topic, use topic.slug for the next api call
      api.addNewTopic(newTopicName, newTopicDesc)
        .then(({ slug }) => {
          this.setState({ newTopic: slug })
        })
        .catch(err => console.log(err))
    }
    // then call the post articlebytopic function with topic, tile, body and username, returns article
    // reset the state
    const topic = (selectedTopic === "New") ? newTopicName : selectedTopic
    console.log('new article topic: ', topic)
    api.addNewArticle(topic, newArticleName, newArticleBody, username)
      .then(article => {
        this.setState({ newArticleID: article[0].article_id })
      })
      .catch(err => console.log(err))
    // navigate to the singlearticle page using article.article id
  }

}

export default NewArticle;