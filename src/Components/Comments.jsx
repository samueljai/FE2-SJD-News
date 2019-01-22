import React from 'react';

const Comments = ({ comments }) => {
  return (
    <React.Fragment>
      {comments.map(comment => (
        <div className="comment" key={comment.comment_id}>
          <h3>{comment.author}</h3>
          <p>{comment.created_at}</p>
          <p>{comment.body}</p>
          <p>{comment.votes}</p>
        </div>
      ))
      }
    </React.Fragment >
  );
};

export default Comments;