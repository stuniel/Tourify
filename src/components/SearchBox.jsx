import React from 'react';

class SearchBox extends React.Component {
  handleChange(e) {
    const updatedArtist = e.target.value;
    this.props.updateArtist(updatedArtist);
  }

  render() {
    $(document).ready(function(){
      $('input.autocomplete').autocomplete({
        data: {
          // Artist object
        },
        limit: 3,
        onAutocomplete: function(data) {
          // Selecting input value
          console.log(data);
        }
      });
    });

    return (
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">search</i>
          <input type="text" id="band-input" className="autocomplete" onChange={(e) => {this.handleChange(e)}}/>
          <label htmlFor="band-input">Band Name</label>
        </div>
      </div>
    )
  }
}

export default SearchBox;
