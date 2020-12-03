import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import PodcastsContainer from './PodcastsContainer';
import Spinner from '../layout/Spinner';

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div>
        <SearchForm />
        {loading ? <Spinner /> : <PodcastsContainer />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.podcasts.loading
})
export default connect(mapStateToProps)(Landing); 