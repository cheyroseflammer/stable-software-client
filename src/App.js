import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Grass from "./components/ui/Grass";
import Main from "./components/layout/Main";

export default function App() {
  return (
    <div className="App-main">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
      <Grass />
    </div>
  );
}
