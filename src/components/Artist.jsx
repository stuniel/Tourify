import React from 'react';
import { Row, Col } from 'react-materialize';

const Artist = ({name, image, facebook, url}) => (
  <Col className="s12 artist">
    <div className="card hoverable">
      <div className="card-content s12 m9">
        <Row className="valign-wrapper">
          <Col className="s12 m6 l3">
            <img className="responsive-img z-depth-1" src={image} alt={name} />
          </Col>
          <Col className="s12 m6 l9">
            <div className="center">
              <h4 className="header2">{name}</h4>
              <p><a target="_blank" href={url}>More info</a></p>
              <p><a target="_blank" href={facebook}>Facebook Page</a></p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </Col>
)

export default Artist;
