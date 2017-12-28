import React from 'react';
import { Route } from 'react-router-dom';
import { Row } from 'react-materialize';
import FloatingSearch from './components/FloatingSearch';
import SearchForm from './components/SearchForm';
import Events from './components/Events';
import { eventsRepository, formatUrl, decodeUrl } from './utils/API';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artistInfo: {},
      events: [],
      artist: '',
    }
  }

  updateArtist = artist => this.setState({artist});

  loadArtist = (artist) => {
    eventsRepository.getArtist(artist)
      .then(artistInfo => this.setState({artistInfo}));
  }

  loadEvents = (artist, from, to) => {
    eventsRepository.getEventsForArtist(artist, from, to)
      .then(events => this.setState({events}));
  }

  setDates = (prop, value) => {
    this.setState({[prop]: value});
  }

  loadFromUrl = () => {
    if(this.props.location.pathname !== '/') {
      const paths = decodeUrl(this.props.location.pathname);
      const artist = paths[0];
      this.loadArtist(artist);
      this.loadEvents(...paths);
      this.hideSearchForm();
    }
  }

  hideSearchForm = () => {
    document.querySelector("#search-form").classList.add('hide');
    document.querySelector(".search-btn").classList.remove('hide');
  }

  openSearchForm = () => {
    document.querySelector("#search-form").classList.remove('hide');
    document.querySelector(".search-btn").classList.add('hide');
  }

  inputsFilled = () => {
    return [this.state.artist, this.state.from, this.state.to].every(input => input !== "" && input !== undefined);
  }

  checkInput = (input) => {
    // Checking if the input value is passed
    (input.value == '') ? input.classList.add('invalid') : input.classList.remove('invalid');
  }

  submitHandler = (e, inputs) => {
    e.preventDefault();
    if(this.inputsFilled(inputs)){
      this.loadArtist(this.state.artist);
      this.loadEvents(this.state.artist, this.state.from, this.state.to);
      this.hideSearchForm();
      this.props.history.push(formatUrl(this.state.artist, this.state.from, this.state.to));
    } else {
      document.querySelectorAll('#search-form input')
        .forEach(input => this.checkInput(input));
    }
  }

  render() {
    return (
      <div className='App'>
        <Row>
          <FloatingSearch
            openSearchForm={this.openSearchForm}
          />
          <SearchForm
            updateArtist={this.updateArtist}
            loadArtist={this.loadArtist}
            loadEvents={this.loadEvents}
            artist={this.state.artist}
            submitHandler={this.submitHandler}
            setDates={this.setDates}
          />
          <Route
            path={`${this.props.match.path}events/:artistId`}
            render={() =>
              <Events
                name={this.state.artistInfo.name}
                image={this.state.artistInfo.image_url}
                facebook={this.state.artistInfo.facebook_page_url}
                url={this.state.artistInfo.url}
                events={this.state.events}
                loadFromUrl={this.loadFromUrl}
                openSearchForm={this.openSearchForm}
              />
            }
          />
        </Row>
      </div>
    )
  }
}

export default App;
