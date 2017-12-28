import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <Link to="/">
      <h2 className="brand-logo center">TOURIFY</h2>
    </Link>
  </header>
)

export default Navigation;
