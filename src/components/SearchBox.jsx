import React from 'react';
import { Row, Autocomplete } from 'react-materialize';
import { artistsList } from '../utils/Lists';

const SearchBox = ({updateArtist}) => (
  <Row>
	  <Autocomplete
      icon='search'
      iconClassName='prefix'
  		title='Company'
  		data={artistsList}
      limit={3}
      onAutocomplete={value => updateArtist(value)}
      s={12}
  	/>
  </Row>
)

export default SearchBox;
