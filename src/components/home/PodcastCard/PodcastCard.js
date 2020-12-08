import React, { Component } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import Accordion from 'react-bootstrap/Accordion';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import 'react-h5-audio-player/lib/styles.css';
import './PodcastCard.css';

export class PodcastCard extends Component {

  formatTime(secs) {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor(secs / 60) % 60;
    let seconds = secs % 60;
    return [hours, minutes, seconds]
      .map(v => ('' + v).padStart(2, '0'))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':');
  }
  render() {
    const { podcast } = this.props;
    return (
      <div id="container">
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Row>
                  <div className="col-lg-3">
                    <img className="w-100 img-fluid" src={podcast.thumbnail} alt="Podcast Img" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{podcast.podcast.title_original}</h5>
                      <h6 className="card-text">{podcast.title_original}</h6>
                      <p className="card-text" dangerouslySetInnerHTML={{ __html: podcast.description_highlighted }} />
                      <p className="card-text">{this.formatTime(podcast.audio_length_sec)} </p>
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
                  autoPlayAfterSrcChange={false}
                  showFilledVolume={true}
                  customIcons={{
                    play: <BsPlayFill size={15} color="#4045F5" />,
                    pause: < BsPauseFill size={15} color="#4045F5" />
                  }}
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