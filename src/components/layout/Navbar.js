import React, { Component } from 'react';
// import '../styles/Nav.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <Router>
          <nav className="container">
            <Link to="/home"> Home</Link>
            <Link to="/riders"> Riders</Link>
            <Link to="/horses"> Horses</Link>
            <Link to="/login">Login</Link>
          </nav>
        </Router>
      </div>
    );
  }
}
