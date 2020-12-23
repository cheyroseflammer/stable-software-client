import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./Main";

import AddButton from "./components/ui/AddButton";

function Landing() {
  return (
    <Router>
      <section>
        <header>
          <h1 className="">Stable Software abndafdf</h1>
        </header>
        <div className=" ">
          {/* <Main /> */}

          <Link to="/main">
            <button className="button">click me</button>
          </Link>
          {/* <AddButton tag={Link} to="/main" type="button" className="get-started">
            Get started
            </AddButton> */}
        </div>
        <Route path="/main" render={() => <Main />} />
      </section>
    </Router>
  );
}
export default Landing;
