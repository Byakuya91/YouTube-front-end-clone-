import axios from "axios";
import React, { useState } from "react";
import { API_KEY_ONE } from "../../API_KEYS";

// console.log(API_KEY_ONE);

// A UseEffect that is linked to the button.

const YTSearch = (props) => {
  const [searchVideoTerm, setSearchVideoTerm] = useState("");

  //   checking the searchTerm to see if it works.
  console.log(searchVideoTerm);

  async function handleSubmit(event) {
    //  prevent the page from reloading
    event.preventDefault();
    //  api call
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchVideoTerm}&key=${API_KEY_ONE}&part=snippet`
      )
      .then((res) => {
        props.handleYTSearch([res.data]);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter search"
        onChange={(event) => setSearchVideoTerm(event.target.value)}
      ></input>

      <button type="submit" disabled={!searchVideoTerm.length}>
        Search
      </button>
    </form>
  );
};

export default YTSearch;
