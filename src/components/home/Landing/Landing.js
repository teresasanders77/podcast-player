import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';
import PodcastsContainer from '../PodcastsContainer/PodcastsContainer';
import './Landing.css';


export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: []
    }
  }

  render() {
    const { podcasts } = this.props;
    if (podcasts === undefined) {
      return (
        <div className="resultsBackground2">
          <h2>Welcome!</h2>
          <h1>Explore top podcasts!</h1>
          <SearchForm />
        </div>
      )
    } else {
      return (
        <div className="resultsBackground">
          <PodcastsContainer />
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  loading: state.podcasts.loading,
  podcasts: state.podcasts.podcasts.results,
})
export default connect(mapStateToProps)(Landing); 