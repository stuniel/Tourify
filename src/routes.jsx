import React from 'react';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';
import App from './app';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import 'styles/index.scss';

const Routes = () => {
  return (
    <Router>
      <div className="main">
        <Navigation />
        <Route path="/" component={App} />
        <Footer />
      </div>
    </Router>
  );
}

export default Routes;
