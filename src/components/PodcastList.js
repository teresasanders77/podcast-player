import React from "react";

function PodcastList({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }
  console.log(data);
  return (
    <div className="result">
      It is working
    </div>
  );
}

export default PodcastList;