import React from 'react';
import SearchBox from './SearchBox';
import { Row, Col, Input, Autocomplete } from 'react-materialize';
import { datePickerOptions, artistsList } from '../utils/Lists';

const SearchForm = ({submitHandler, updateArtist, setDates }) => {
  const inputs = [];
  return (
    <Col
      id="search-form"
      className="s12"
    >
      <div className="card">
        <div className="card-content">
          <h4 className="header2">Find Event</h4>
          <Row>
            <form className="col s12" onSubmit={e => {submitHandler(e, inputs)}}>
              <Row>
            	  <Autocomplete
                  icon='search'
                  iconClassName='prefix'
                  id="artist-name"
              		title="Artist's Name"
              		data={artistsList}
                  limit={3}
                  onChange={(e, value) => {
                    updateArtist(value);
                  }}
                  onAutocomplete={value => {
                    inputs[0] = value;
                    updateArtist(value);
                  }}
                  s={12}
              	/>
              </Row>
              <Row>
                <Input
                  icon='date_range'
                  id="date-from"
                  name='on'
                  type='date'
                  s={12}
                  label="Date From"
                  onChange={(e, value) => {
                    setDates('from', value);
                    inputs[1] = value;
                  }}
                  options={datePickerOptions}
                />
              </Row>
              <Row>
                <Input
                  icon='date_range'
                  id="date-to"
                  name='on'
                  type='date'
                  s={12}
                  label="Date From"
                  onChange={(e, value) => {
                    setDates('to', value);
                    inputs[2] = value;
                  }}
                  options={datePickerOptions}
                />
              </Row>
              <Row>
                <Col className="input-field s12">
                  <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                  </button>
                </Col>
              </Row>
            </form>
          </Row>
        </div>
      </div>
    </Col>
  )
}


export default SearchForm;
