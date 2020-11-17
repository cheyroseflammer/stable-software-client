import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import AddHorse from '../components/AddHorse';

export default class Horses extends Component {
  render() {
    return (
      <section className="horses">
        <div className="displayHorses">
          <h2>Horses</h2>
        </div>
        <div className="addHorse">
          <Link to="/addhorse">
            <button>Add Horse 🐴 </button>
          </Link>
        </div>
      </section>
    );
  }
}
