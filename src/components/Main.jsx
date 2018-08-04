import React from 'react';
import SearchForm from './SearchForm';
import Artist from './Artist';
import Event from './Event';

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="section">
          <div className="row">
            <SearchForm
              updateArtist={this.props.updateArtist}
              loadArtist={this.props.loadArtist}
              loadEvents={this.props.loadEvents}
              artist={this.props.artist}
            />
            {
              Object
                .keys(this.props.artistInfo)
                .map(key => <Artist key={key} index={key} details={this.props.artistInfo[key]}
                />)
            }
            {
              Object
              .keys(this.props.events)
              .map(key => <Event key={key} index={key} details={this.props.events[key] }
              />)
            }
          </div>
        </div>
      </main>
    )
  }
}

export default Main;
