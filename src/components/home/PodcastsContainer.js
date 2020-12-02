import React, { Component } from 'react';
import { connect } from 'react-redux';
import PodcastCard from './PodcastCard';

export class PodcastsContainer extends Component {
  render() {
    const { podcasts } = this.props;
    let content = '';

    content = podcasts.length > 0 ? podcasts.map((podcast, index) => <PodcastCard key=
      {index} podcast={podcast} />) : null;
    return (
      <div className="row">
        {content}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  podcasts: state.podcasts.podcasts
})

export default connect(mapStateToProps)(PodcastsContainer);