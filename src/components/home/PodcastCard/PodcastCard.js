import React, { Component } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import 'react-h5-audio-player/lib/styles.css';
import './PodcastCard.css';

export class PodcastCard extends Component {

  render() {
    const { podcast } = this.props;
    return (
      <div id="container">
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Row>
                  <div className="col-md-3">
                    <img className="w-100 img-fluid" src={podcast.thumbnail} alt="Podcast Img" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{podcast.podcast.title_original}</h5>
                      <h6 className="card-text">{podcast.title_original}</h6>
                      <p className="card-text" dangerouslySetInnerHTML={{ __html: podcast.description_highlighted }} />
                      <p className="card-text">{podcast.audio_lenth_sec}</p>
                    </div>
                  </div>
                </Row>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <AudioPlayer
                  src={podcast.audio}
                  onPlay={e => console.log("onPlay")}
                  layout="horizontal"
                // other props here
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

export default PodcastCard