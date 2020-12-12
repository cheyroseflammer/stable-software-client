import React, { Component } from "react";
// import '../../styles/Welcome.css';
import { Route } from "react-router-dom";
import App from "../../App";

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
        <Route exact path="/" component={App}>
          {/* <a href="/" className="button">
            Get Started 🡲
          </a> */}
        </Route>
      </div>
    );
  }
}
