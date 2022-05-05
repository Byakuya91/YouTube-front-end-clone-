import React, { useState, useEffect } from "react";
import YTSearch from "../Search/YTSearch";

const RelatedVideoMapper = (props) => {
  return (
    <ul>
      {/* Tring to check for membership inside YTSearchResults and map */}
      {props.YTSearchResults.map((searchResult) =>
        searchResult.hasOwnProperty("snippet") &&
        searchResult.hasOwnProperty("title") ? (
          <li>{searchResult[0].snippet.title}</li>
        ) : (
          false
        )
      )}
    </ul>
  );
};

export default RelatedVideoMapper;
