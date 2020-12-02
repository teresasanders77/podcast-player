import React, { Component } from 'react'

export class PodcastCard extends Component {
  render() {
    const { podcast } = this.props;
    return (
      <div>
        <div className="col-md-3 mb-5">
          <div className="card card-body bg-dark text-center h-100">
            <img className="w-100 mb-2" src={podcast.image} alt="Podcast Img" />
            <h5 className="text-light card-title">
              {podcast.title_original} - {podcast.publisher_original}
            </h5>
            <a className="btn btn-primary" href="#">
              Play Podcast
              <i className="fas fa-chevron-right" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default PodcastCard