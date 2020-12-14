import React from "react";
import { connect } from "react-redux";
import PodcastCard from "../PodcastCard/PodcastCard";
import './PodcastsContainer.css';
import BackButton from '../../Icons/BackButton';
import Logo from '../../Icons/Logo.js'
import SearchForm from '../SearchForm/SearchForm';
import { withRouter } from "react-router-dom";



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
      <div className="header">
        <div className="logo">
          <a href="/podcast-player"><Logo width="70pt" /></a>
        </div>
        <div style={{
          float: 'left',
          marginTop: '60px',
          marginLeft: '20px',
          position: 'sticky',
          top: '90px'
        }}>
          <div className="resultsCounter">
            <a href='/podcast-player'><BackButton /></a>
        &nbsp;&nbsp;&nbsp; Results ({content.length})
        </div>
          <div className="resultsSearch">
            <SearchForm />
          </div>
        </div>
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
  text: state.podcasts.text,
});

export default withRouter(connect(
  mapStateToProps)(PodcastsContainer));

