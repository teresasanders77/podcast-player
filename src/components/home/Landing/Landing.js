import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';
import PodcastsContainer from '../PodcastsContainer/PodcastsContainer';
import Spinner from '../../layout/Spinner';
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
        <div>
          <h2>Welcome!</h2>
          <h1>Explore top podcasts!</h1>
          <SearchForm />
        </div>
      )
    } else {
      return <PodcastsContainer />;
    }
  }
}

const mapStateToProps = state => ({
  loading: state.podcasts.loading,
  podcasts: state.podcasts.podcasts.results,
})
export default connect(mapStateToProps)(Landing); 