import React from 'react';
import Voting from './Voting';

const Comments = ({ article_id, comments, deleteComment, username }) => {
  return (
    <React.Fragment>
      {comments.map(comment => (
        <div className="comment" key={comment.comment_id}>
          <div className="authorImg"><img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-128.png" alt="avatar" /></div>
          <h4>{comment.author}</h4>
          <p>{new Date(new Date(comment.created_at).toJSON()).toUTCString().slice(5, 16)}</p>
          <p>{comment.body}</p>
          <div className="votingBox">
            <Voting votes={comment.votes} article_id={article_id} comment_id={comment.comment_id} />
            {comment.author === username &&
              (<button className="deleteButton" onClick={() => deleteComment(comment.comment_id)} >Delete Comment</button>)
            }
          </div>
        </div>
      ))
      }
    </React.Fragment >
  );
};

export default Comments;