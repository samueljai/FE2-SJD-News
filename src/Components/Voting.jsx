import React, { Component } from 'react';

class Voting extends Component {
  render() {
    return (
      <section className="voting">
        <button onClick={() => this.updateVote(-1)} disabled={voteChange > 0}>Vote Up</button>
        <p>votes + voteChange</p>
        <button onClick={() => this.updateVote(1)} disabled={voteChange < 0}>Vote Down</button>
      </section>
    );
  }
}

export default Voting;