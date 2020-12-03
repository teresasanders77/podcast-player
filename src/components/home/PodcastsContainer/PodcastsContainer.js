import React, { useEffect } from "react";
import { connect } from "react-redux";
import PodcastCard from "../PodcastCard/PodcastCard";
import BackButton from '../../Icons/BackButton.js'


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
  }
  return <div>{content}</div>;
};

const mapStateToProps = (state) => ({
  podcasts: state.podcasts.podcasts.podcasts,
});

export default connect(mapStateToProps)(PodcastsContainer);