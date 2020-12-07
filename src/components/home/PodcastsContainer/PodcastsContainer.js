import React from "react";
import { connect } from "react-redux";
import PodcastCard from "../PodcastCard/PodcastCard";
import './PodcastsContainer.css';
import BackButton from '../../Icons/BackButton'
import { render } from "@testing-library/react";



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
  }
  if (content.length > 0) {
    return <div className="podcastContent"><div style={{ float: 'left', marginTop: '60px', marginLeft: '20px' }}>
      <a href='/'> <BackButton /></a>
  Results ({content.length})
</div>{content}</div>;
  };
  return null;
}

const mapStateToProps = (state) => ({
  podcasts: state.podcasts.podcasts.results,
});

export default connect(mapStateToProps)(PodcastsContainer);