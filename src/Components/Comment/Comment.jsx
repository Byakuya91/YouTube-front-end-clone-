import { useState, useEffect } from "react";
import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";

const Comment = (props) => {
  const [comment, setComment] = useState(props.comment);

  useEffect(() => {
    console.log(comment);
  }, [comment]);
  return (
    <div>
      <p>{comment.text}</p>
      <p>{comment.likes}</p>
      <p>{comment.dislikes}</p>
      <LikeButton
        commentID={comment._id}
        comment={comment}
        setComment={setComment}
      />
      <DislikeButton
        commentID={comment._id}
        comment={comment}
        setComment={setComment}
      />
    </div>
  );
};

export default Comment;
