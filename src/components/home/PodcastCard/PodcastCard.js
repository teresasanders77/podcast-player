import React, { Component } from 'react'
import './PodcastCard.css';

export class PodcastCard extends Component {

  render() {
    const { podcast } = this.props;
    return (
      <div id="container">
        <div className="card mb-1">
          <div className="row h-100 no-gutters">
            <div className="col-md-3">
              <img className="w-100 img-fluid" src={podcast.thumbnail} alt="Podcast Img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {podcast.title_original}
                </h5>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: podcast.description_highlighted }} />
                <a className="btn btn-primary" href="#">
                  Play Podcast
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PodcastCard