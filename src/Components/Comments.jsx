import React from 'react';

const Comments = ({ comments, deleteComment, updateCommentVote, username }) => {
  return (
    <React.Fragment>
      {comments.map(comment => (
        <div className="comment" key={comment.comment_id}>
          <h3>{comment.author}</h3>
          <p>id: {comment.comment_id}</p>
          <p>{new Date(new Date(comment.created_at).toJSON()).toUTCString().slice(5, 22)}</p>
          <p>{comment.body}</p>
          <p>{comment.votes}</p>
          <button onClick={() => updateCommentVote(1, comment.comment_id)} >Vote Up</button>
          <button onClick={() => updateCommentVote(-1, comment.comment_id)} >Vote Down</button>
          {comment.author === username &&
            (<button onClick={() => deleteComment(comment.comment_id)} >Delete</button>)
          }
        </div>
      ))
      }
    </React.Fragment >
  );
};

export default Comments;