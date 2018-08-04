import React from 'react';
import SearchBox from './SearchBox';

class SearchForm extends React.Component {

  goToBand(e) {
    e.preventDefault();
    // console.log(this.bandInput.value);
    const inputs = document.querySelectorAll('#search-form input');
    inputs.forEach(input => {
      this.checkDate(input);
    })
    if(this.inputsFilled()){
      const artist = this.props.artist;
      const from = this.pickerFrom.get('highlight', 'yyyy-mm-dd');
      const to = this.pickerTo.get('highlight', 'yyyy-mm-dd');
      console.log(artist, from, to);
      this.props.loadArtist(artist);
      this.props.loadEvents(artist, from, to);
      const searchForm = document.querySelector("#search-form");
    }
  }

  checkDate(input) {
    // Checking if the input value is passed
    (input.value == '') ? input.classList.add('invalid') : input.classList.remove('invalid')
  }

  inputsFilled() {
    const inputs = new Array(this.props.artist, this.dateFrom.value, this.dateTo.value);
    // Checking if any input is empty
    const filledInputs = inputs.filter(input => {
      return input != "";
    });
    const isFilled = filledInputs.length === inputs.length;
    return (isFilled)
  }

  componentDidMount() {
    // Creating datepicker
    const self = this;
    $('.datepicker').pickadate({
      onOpen: function() {
        console.log('Opened up!');
      },
      onClose: function() {
        self.checkDate(this.$node[0]);
      },
      min: new Date(),
      formatSubmit: 'yyyy/mm/dd',
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
    this.dates = new Array(this.dateFrom, this.dateTo);
    // Creating date range in datepicker
    const $inputFrom = $('#date-from').pickadate();
    const $inputTo = $('#date-to').pickadate();
    this.pickerFrom = $inputFrom.pickadate('picker');
    this.pickerTo = $inputTo.pickadate('picker');
    // Setting min date range of date-to to date-from date
    // this.dates.forEach(input => input.addEventListener('focus', () => this.checkDate(input)))
    this.dateTo.addEventListener('focus', () => this.pickerTo.set('min', new Date(this.dateFrom.value)))
  }

  render() {
    const artist = this.props.artist;
    return (
      <div id="search-form" className="col s12">
        <div className="card">
          <div className="card-content">
            <h4 className="header2">Find Event</h4>
            <div className="row">
              <form className="col s12" onSubmit={e => {this.goToBand(e)}}>
                <SearchBox
                  updateArtist={this.props.updateArtist}
                />
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">date_range</i>
                    <input id="date-from" type="date" className="datepicker" ref={(input) => {this.dateFrom = input}} />
                    <label htmlFor="date-from">Date From</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">date_range</i>
                    <input id="date-to" type="date" className="datepicker" ref={(input) => {this.dateTo = input}} />
                    <label htmlFor="date-to">Date To</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchForm;
