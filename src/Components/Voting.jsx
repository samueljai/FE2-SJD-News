import React, { Component } from 'react';
import * as api from '../Utils/api';

class Voting extends Component {
  state = {
    voteChange: 0,
  }

  render() {
    const { voteChange } = this.state
    const { votes } = this.props

    return (
      <section className="voting">
        <h4>Votes: {votes + voteChange}</h4>
        <button onClick={() => this.updateVote(1)} disabled={voteChange > 0}>Vote Up</button>
        <button onClick={() => this.updateVote(-1)} disabled={voteChange < 0}>Vote Down</button>
      </section>
    );
  }

  updateVote = direction => {
    const { article_id, comment_id } = this.props
    api.patchVotes(article_id, comment_id, direction)
    this.setState(({ voteChange }) => ({
      voteChange: voteChange + direction
    }))
  }
}

export default Voting;