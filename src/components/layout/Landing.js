import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="container">
      <div className="welcome-text">
        <h1>Welcome to Stable Software 🐴</h1>
        <h3>Manage all your stables information in one user-friendly place!</h3>
        <ul>
          <li>
            Organize your horses, riders and their schedules all in one place.
          </li>
          <li>
            View detailed profiles for each horse in your stable. Including
            stall number, age, and showname.
          </li>
          <li>
            View all your riders in one place with the option to expand and view
            each riders horse and schedule.
          </li>
        </ul>

        <p>
          <Link to="/main" className="button-welcome">
            {" "}
            Get Started{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Landing;
