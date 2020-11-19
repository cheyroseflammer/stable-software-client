/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useState } from 'react';
import '../../styles/Nav.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <nav className="navbar-container">
          <Link to="/home">
            Stable Software <i className="fas fa-horse-head" />
          </Link>
          <Link to="/riders"> Riders</Link>
          <Link to="/horses"> Horses</Link>
          {/* <Link to="/schedule"> Schedule</Link> */}
          <Link to="/login">Login</Link>
        </nav>
      </div>
    );
  }
}
