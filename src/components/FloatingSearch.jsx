import React from 'react';

const FloatingSearch = ({openSearchForm}) => (
  <div className="fixed-action-btn search-btn hide">
    <a href="#" className="btn-floating btn-large waves-effect waves-light pulse" onClick={() => openSearchForm()}><i className="material-icons">search</i></a>
  </div>
)

export default FloatingSearch;
