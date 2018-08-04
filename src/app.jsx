import React from 'react';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import {Link} from 'react-router-dom';
import 'normalize.css';
import 'styles/index.scss';

class App extends React.Component {
  constructor() {
    super();
    this.updateArtist = this.updateArtist.bind(this);
    this.loadArtist = this.loadArtist.bind(this);
    this.loadEvents = this.loadEvents.bind(this);
    this.state = {
      artistInfo: {},
      band: {},
      artist: '',
      events: {}
    }
  }

  componentWillMount() {
    fetch('https://rest.bandsintown.com/artists/Bonobo/events?app_id=Event_Search_App&date=2017-12-20%2C2018-03-05')
      .then(data => data.json())
      .then(band => { this.setState({ band })
      })
  }

  updateArtist(updatedArtist) {
    this.setState({ artist: updatedArtist})
  }

  loadArtist(artist) {
    fetch(`https://rest.bandsintown.com/artists/${artist}?app_id=Event_Search_App`)
      .then(data => data.json())
      .then(data => new Array(data))
      .then(artistInfo => { this.setState({ artistInfo }) })
  }

  loadEvents(artist, from, to) {
    fetch(`https://rest.bandsintown.com/artists/${artist}/events?app_id=Event_Search_App&date=${from}%2C${to}`)
      .then(data => data.json())
      .then(events => { this.setState({ events }) })
  }

  render() {
    return (
      <div className='App'>
        <Navigation />
        <Main
          updateArtist={this.updateArtist}
          loadArtist={this.loadArtist}
          loadEvents={this.loadEvents}
          artist={this.state.artist}
          artistInfo={this.state.artistInfo}
          events={this.state.events}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
