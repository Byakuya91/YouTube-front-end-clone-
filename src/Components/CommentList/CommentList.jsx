import Comment from "../Comment/Comment";
import LikeButton from "../LikeButton/LikeButton";

const CommentList = (props) => {
  return (
    <ul>
      {/*  Displaying all the values stored in AllComments. */}
      {props.AllComments.map((comment) => {
        return (
          <li key={comment._id}>
            <Comment comment={comment} />
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
