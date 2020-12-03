import React, { useEffect } from "react";
import { connect } from "react-redux";
import PodcastCard from "../PodcastCard/PodcastCard";
import './PodcastsContainer.css';



const PodcastsContainer = (props) => {
  const { podcasts } = props;
  let content = "";
  if (podcasts === undefined) {
    console.log("Unable to find any movies");
  } else {
    content =
      podcasts.map((podcast, index) => (
        <PodcastCard key={index} podcast={podcast} />
      ));
    console.log(content);
    console.log(podcasts.length);
  }
  return <div>{content}</div>;
};

const mapStateToProps = (state) => ({
  podcasts: state.podcasts.podcasts.results,
});

export default connect(mapStateToProps)(PodcastsContainer);