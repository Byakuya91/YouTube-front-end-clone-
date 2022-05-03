import axios from "axios";
import React, { useState } from "react";

import "../LikeButton/LikeButton.css";
// import "../../../src/";

const LikeButton = ({ commentID, comment, setComment }) => {
  //    state variable to toggle the like
  const [likedButton, setLikedButton] = useState("inactive ");

  function handleClick() {
    if (likedButton === "inactive") {
      setLikedButton("active");
    } else {
      setLikedButton("inactive");
    }
  }

  //   TODO list:  figure out
  const likeIncrementor = async (event) => {
    let likedComment = {
      videoID: comment.videoID,
      likes: comment.likes + 1,
      text: comment.text,
    };
    await axios
      .put(`http://localhost:3007/api/comments/${commentID}`, likedComment)
      .then((res) => {
        setComment(res.data);
        console.log(res.data);
      });
  };

  return (
    <button className={likedButton} onClick={(event) => likeIncrementor(event)}>
      Like
    </button>
  );
};

export default LikeButton;
