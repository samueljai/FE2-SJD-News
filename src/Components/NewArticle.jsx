import React, { Component } from 'react';
import Header from './Header';
import '../CSS/NewArticle.css';
import * as api from '../Utils/api';
import * as format from '../Utils/formatting'
import { navigate } from '@reach/router';
import ErrorPage from './ErrorPage';

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
    err: ''
  }

  render() {
    const { err, slugs, loading, selectedTopic } = this.state
    const { topic, loggedIn } = this.props;

    const heading = (!topic) ?
      'Create a New Article'
      : `Create a New ${topic} Article`;

    if (err) return (<ErrorPage err={err} />)
    else if (!loading) {
      return (
        <React.Fragment>
          <Header heading={heading} loggedIn={loggedIn} display={true} />
          <main className="newArticleMain">
            <div className="newArticleTopic">
              <h3>Select a Topic for your Article:</h3>
              <div className="styled-topicSelect">
                <select className="topicSelect" autoFocus required defaultValue={topic} onChange={this.handleTopicSelect} >
                  <option value="New">New Topic</option>
                  {slugs.map(slug => {
                    return (<option key={slug} value={slug}>{slug}</option>)
                  })}
                </select >
              </div>
            </div>
            <form onSubmit={this.handleSubmit} className="newArticleForm">
              {(selectedTopic === "New") &&
                <section className="newTopicSection">
                  <h3>New Topic Details:</h3>
                  <input type="text" required id="newTopicName" value={this.state.value} onChange={this.handleChange} placeholder="Enter a New Topic Title" />
                  <textarea required id="newTopicDesc" value={this.state.value} onChange={this.handleChange} placeholder="Enter a description for your new topic..." />
                </section>
              }
              <section className="newArticleSection">
                <h3>New Article Details:</h3>
                <input type="text" required id="newArticleName" value={this.state.value} onChange={this.handleChange} placeholder="Enter a New Article Title" />
                <textarea required id="newArticleBody" value={this.state.value} onChange={this.handleChange} placeholder="Enter your new article..." />
              </section>
              <button className="publishButton" type="submit">Publish Your Article</button>
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
      .catch(err => {
        this.setState({ err: err })
      })
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
    const { newTopicDesc, newTopicName, selectedTopic } = this.state;

    // if NEW topic has been selected, call addNewTopic first, then addNewArticle
    // if existing topic, then just addNewArticle
    if (selectedTopic === "New") {
      // call the post topic function in the api file, pass in the slug and description
      // returns the added topic, use topic.slug for the next api call
      api.addNewTopic(format.formatTitle(newTopicName), format.formatText(newTopicDesc))
        .then(({ slug }) => {
          this.setState({ newTopic: slug })
        })
        .then(() => this.submitNewArticle())
        .catch(err => {
          this.setState({ err: err })
        })
    } else {
      this.submitNewArticle()
    }
  }

  submitNewArticle = () => {
    const { newArticleBody, newArticleName, newTopicName, selectedTopic } = this.state;
    const { user: { username } } = this.props
    // then call the post articlebytopic function with topic, tile, body and username, returns article
    // reset the state
    // if NEW topic has been selected, then need to use the newTopicName, 
    // otherwise if it is an existing topic, then use the selected topic

    const topic = (selectedTopic === "New") ? format.formatTitle(newTopicName) : format.formatTitle(selectedTopic)
    api.addNewArticle(topic, format.formatTitle(newArticleName), format.formatText(newArticleBody), username)
      .then(article => {
        this.setState({ newArticleID: article[0].article_id })
        // navigate to the singlearticle page using article.article id
        navigate(`/articles/${article[0].article_id}`);
      })
      .catch(err => {
        this.setState({ err: err })
      })
  }

}

export default NewArticle;