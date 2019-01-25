import React from 'react';
import Voting from './Voting';

const Comments = ({ article_id, comments, deleteComment, username }) => {
  return (
    <React.Fragment>
      {comments.map(comment => (
        <div className="comment" key={comment.comment_id}>
          <h3>{comment.author}</h3>
          <p>id: {comment.comment_id}</p>
          <p>{new Date(new Date(comment.created_at).toJSON()).toUTCString().slice(5, 22)}</p>
          <p>{comment.body}</p>
          <Voting votes={comment.votes} article_id={article_id} comment_id={comment.comment_id} />
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