import React from "react";
import { connect } from "react-redux";
import PodcastCard from "../PodcastCard/PodcastCard";
import './PodcastsContainer.css';
import BackButton from '../../Icons/BackButton';
import SearchForm from '../SearchForm/SearchForm';
import Logo from '../../Icons/Logo.js'



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
    return <div className="podcastContent">
      <div className="logo">
        <Logo width="70pt" />
      </div>
      <div style={{
        float: 'left',
        marginTop: '60px',
        marginLeft: '20px',
        position: 'sticky',
        top: '90px'
      }}>
        <a href='/'><BackButton /></a>
        &nbsp;&nbsp;&nbsp; Results ({content.length})
      </div>
      <div className="resultsContent">
        {content}
      </div>
    </div>;
  };
  return null;
}

const mapStateToProps = (state) => ({
  podcasts: state.podcasts.podcasts.results,
});

export default connect(mapStateToProps)(PodcastsContainer);