import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { searchPodcast, fetchPodcasts } from '../../actions/searchActions';

export class SearchForm extends Component {

  onChange = e => {
    this.props.searchPodcast(e.target.value);
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchPodcasts(this.props.text)
    this.props.history.push("/results");
  }

  render() {
    return (
      <div className="searchForm">
        <div className="searchDiv">
          <h2>Welcome!</h2>
          <h1>Explore top podcasts!</h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <div class="p-1 rounded  shadow-sm">
              <div class="input group">
                <div class="input-group-prepend">
                  <button id="button-addon2" type="submit" class="btn btn-link"><i class="fa fa-search"></i></button>
                  <input
                    type="text"
                    className="form-control border-0"
                    name="searchText"
                    placeholder="Search podcasts"
                    onChange={this.onChange}
                  />
                  <i class="fa fa-microphone"></i>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  text: state.podcasts.text
})

export default withRouter(connect(
  mapStateToProps,
  { searchPodcast, fetchPodcasts }
)(SearchForm));