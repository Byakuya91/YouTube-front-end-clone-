import { useState, useEffect } from "react";
import LikeButton from "../LikeButton/LikeButton";
const Comment = (props) => {
  const [comment, setComment] = useState(props.comment);

  useEffect(() => {
    console.log(comment);
  }, [comment]);
  return (
    <div>
      <p>{comment.text}</p>
      <p>{comment.likes}</p>
      <LikeButton
        commentID={comment._id}
        comment={comment}
        setComment={setComment}
      />
    </div>
  );
};

export default Comment;
