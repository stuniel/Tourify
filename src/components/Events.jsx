import React from 'react';
import { withRouter } from 'react-router-dom';
import Artist from './Artist';
import Event from './Event';

class Events extends React.Component {
  componentDidMount() {
    this.props.loadFromUrl();
  }

  componentWillUnmount() {
    this.props.openSearchForm();
  }

  render() {
    return (
      <div>
        <Artist
          name={this.props.name}
          image={this.props.image}
          facebook={this.props.facebook}
          url={this.props.url}
        />
        {
          this.props.events
          .map(event =>
            <Event
              key={event.id}
              index={event.id}
              date = {event.datetime}
              url = {event.url}
              name = {event.venue.name}
              city = {event.venue.city}
              country = {event.venue.country}
            />
          )
        }
      </div>
    )
  }
}

export default withRouter(Events);
