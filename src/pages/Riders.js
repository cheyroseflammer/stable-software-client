import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import AddRider from '../components/AddRider';

export default class Riders extends Component {
  render() {
    return (
      <section className="riders">
        <div className="displayRiders">
          <h2>Riders</h2>
        </div>
        <div className="addRider">
          <Link to="/addrider">
            <button>Add Rider 🏇 </button>
          </Link>
        </div>
      </section>
    );
  }
}
