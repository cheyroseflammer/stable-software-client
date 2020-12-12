import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
// import config from "./config";
// import ApiContext from "./ApiContext";

import Welcome from "./components/layout/Welcome";
import Main from "./Main";

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to={"/"}>
            <h1 className="petful">Stable Software</h1>
          </Link>
        </header>

        <Switch>
          <Route exact path={"/"} component={Welcome} />
          <Route exact path={"/main"} component={Main} />
        </Switch>
      </div>
    );
  }
}
