import React, { Component } from "react";
import "../../styles/Welcome.css";
import { Link } from "react-router-dom";

export default class Welcome extends Component {
  render() {
    return (
      <div className="hello">
        <h1>Welcome to Stable Software</h1>
        <h3>Manage all your stables information in one user-friendly place!</h3>
        <p>
          Organize your horses, riders and their schedules all in one place.
        </p>
        <p>View detailed profiles for each horse in your stable.</p>
        <p>
          View all your riders in one place with the option to expand and view
          each riders horse and schedule.
        </p>
        <Link to="/main">
          <button>Get Started 🡲</button>
        </Link>
      </div>
    );
  }
}
