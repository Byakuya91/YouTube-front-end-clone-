import Comment from "../Comment/Comment";
import LikeButton from "../LikeButton/LikeButton";

const CommentList = (props) => {
  return (
    <p>
      {/*  Displaying all the values stored in AllComments. */}
      {props.AllComments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </p>
  );
};

export default CommentList;
