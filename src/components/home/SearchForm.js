import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchPodcast, fetchPodcasts } from '../../actions/searchActions';

export class SearchForm extends Component {

  onChange = e => {
    this.props.searchPodcast(e.target.value);
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchPodcasts(this.props.text)
  }

  render() {
    return (
      <div>
        <form id="searchForm" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Search podcasts"
            onChange={this.onChange}
          />
          <button type="submit" className="btn btn-primary btn-bg mt-3">
            Search
            </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  text: state.podcasts.text
})

export default connect(
  mapStateToProps,
  { searchPodcast, fetchPodcasts }
)(SearchForm);