import React, { useState } from "react";
import VideoPlayer from "./Components/VIdeoPlayer/VideoPlayer";

function App() {
  //  Establish state variables
  const [allComents, setAllComents] = useState([]);
  const [currentVideoID, setCurrentVideoIDComents] = useState("1s4c690");
  const [YTresults, setYTResultsComents] = useState([]);

  return (
    <div>
      <VideoPlayer />
    </div>
  );
}

export default App;
