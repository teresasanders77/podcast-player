import React, { Component } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import Accordion from 'react-bootstrap/Accordion';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import 'react-h5-audio-player/lib/styles.css';
import './PodcastCard.css';

const MAX_LENGTH = 250;
export class PodcastCard extends Component {

  /*Function to turn the podcast length from seconds to minutes*/
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
    const originalDescription = podcast.description_highlighted;
    const strippedDescription = originalDescription.replace(/(<([^>]+)>)/gi, "");
    return (
      <div id="container-fluid">
        <Accordion>
          <Card>
            <div className="cardHeader">
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Row className="row">
                  <div className="col-lg-3 col-md-3 col-sm-2" >
                    <img className="img-fluid" src={podcast.thumbnail} alt="Podcast Img" />
                  </div>
                  <div className="col-md-9 col-sm-10">
                    <div className="card-body">
                      <h5 className="card-title">{podcast.podcast.title_original}</h5>
                      <h6 className="card-text">{podcast.title_original}</h6>
                      <div>
                        {podcast.description_highlighted.length > MAX_LENGTH ?
                          (
                            <p>
                              {`${strippedDescription.substring(0, MAX_LENGTH)}...`}
                            </p>
                          ) :
                          <p className="card-text" dangerouslySetInnerHTML={{ __html: podcast.description_highlighted }} />
                        }
                      </div>
                      <p className="card-text">{this.formatTime(podcast.audio_length_sec)} </p>
                    </div>
                  </div>
                </Row>
              </Accordion.Toggle>
            </div>
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