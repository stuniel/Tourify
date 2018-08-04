import React from 'react';

class Event extends React.Component {

  render() {
    const details = this.props.details;
    const date = details.datetime

    return (
        <div className="col s12 m6 l6">
          <div className="card">
            <div className="card-content">
              <h4 className="header2">{date}</h4>
            </div>
          </div>
        </div>
    )
  }
}

export default Event;
