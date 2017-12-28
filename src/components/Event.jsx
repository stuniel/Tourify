import React from 'react';
import { Row, Col } from 'react-materialize';
import { formatEventDate } from '../utils/Date';

const Event = ({date, url, name, city, country}) => (
  <Col className="s12 m6 l6">
    <div className="cards-container">
      <div className="card hoverable">
        <div className="card-content">
          <Row>
            {formatEventDate(date)}
            <Col className="s10 center-align">
              <Row>
                <Col className="s12">
                  <p className="left">{name}</p>
                  <p className="right">{city}, {country}</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="s12 event_btn_wrapper">
              <a className="waves-effect waves-light btn right" target="_blank" href={url}>More info</a>
          </Col>
          </Row>
        </div>
      </div>
    </div>
  </Col>
)

export default Event;
