import axios from "axios";
import React, { useState } from "react";
const CreateComment = (props) => {
  //   state variable for comments
  const [commentText, setCommentText] = useState("");
  // console.log(commentText);

  //  create a function that will handle submiting a post

  async function handleSubmit(event) {
    // prevents page from loading when submit button is clicked.
    event.preventDefault();

    // Create a way to store the comment

    let newComment = {
      text: commentText,
      videoID: "M7lc1UVf-VE",
    };
    // add comments to Comments state array
    //  testing if the comments display.
    // console.log(newComment)
    await axios
      .post("http://localhost:3007/api/comments", newComment)
      .then((res) => props.AddNewComment(res.data));
  }

  return (
    // Input designed to enter a comment
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a comment"
        value={commentText}
        onChange={(event) => setCommentText(event.target.value)}
      ></input>
      <span>
        <button type="submit">Comment</button>
      </span>
    </form>
  );
};

export default CreateComment;
