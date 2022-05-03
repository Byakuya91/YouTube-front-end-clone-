import axios from "axios";
import React, { useState } from "react";

import "../DislikeButton/DislikeButton.css";

const DislikeButton = ({ commentID, comment, setComment }) => {
  //    state variable to toggle the like
  const [dislikeButton, setDislikeButton] = useState("inactive ");

  function handleClick() {
    if (dislikeButton === "inactive") {
      setDislikeButton("active");
    } else {
      setDislikeButton("inactive");
    }
  }

  //   TODO list:  figure out
  const dislikeIncrementor = async (event) => {
    let dislikedComment = {
      videoID: comment.videoID,
      dislikes: comment.dislikes + 1,
      text: comment.text,
    };
    await axios
      .put(`http://localhost:3007/api/comments/${commentID}`, dislikedComment)
      .then((res) => {
        setComment(res.data);
        console.log(res.data);
      })
      .then((res) => setComment(res.data));
  };

  return (
    <button
      className={dislikeButton}
      onClick={(event) => dislikeIncrementor(event)}
    >
      Dislike
    </button>
  );
};

export default DislikeButton;
