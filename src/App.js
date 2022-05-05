import React, { useState } from "react";
import VideoPlayer from "./Components/VIdeoPlayer/VideoPlayer";
import YTSearch from "./Components/Search/YTSearch";
import CreateComment from "./Components/CreateComment/CreateComment";
import CommentList from "./Components/CommentList/CommentList";
import RelatedVideoMapper from "./Components/RelatedVideoMapper/RelatedVideoMapper";

function App() {
  //  Establish state variables
  const [allComments, setAllComments] = useState([]);
  const [currentVideoID, setCurrentVideoIDComents] = useState("");
  const [YTresults, setYTResults] = useState([]);

  // display an array of JSON data
  console.log(YTresults);

  // A function to add comments
  function AddNewComment(comments) {
    // updating the Allcomments state variable
    setAllComments(comments);
    // console.log(comments);
  }

  function YTSearchFields() {
    //  define an array of the search criteria
    const searchFieldKeys = [];
  }

  return (
    <div>
      <YTSearch handleYTSearch={setYTResults} YTresults={YTresults} />
      <RelatedVideoMapper YTSearchResults={YTresults} />
      <VideoPlayer />
      <CreateComment AddNewComment={AddNewComment} />
      <CommentList AllComments={allComments} />
    </div>
  );
}

export default App;
