import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Grass from "./components/ui/Grass";
import Main from "./components/layout/Main";
import AddRider from "./components/ui/AddRider";
import AddHorse from "./components/ui/AddHorse";

// import HorsePageNav from "../src/pages/HorsePageNav";
// import HorseListNav from "../src/pages/HorseListNav";
// import HorsePageMain from "../src/pages/HorsePageMain";
// import HorseListMain from "../src/pages/HorseListMain";

export default function App() {
  return (
    <div className="App-main">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/main" component={Main} />
          {/* <Route path="/add-rider" component={AddRider} /> */}
          <Route path="/add-horse" component={AddHorse} />
        </Switch>
      </Router>
      <Grass />
    </div>
  );
}
