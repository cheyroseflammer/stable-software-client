import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Grass from "./components/ui/Grass";
import Main from "./components/layout/Main";
export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/main" component={Main} />
      </Switch>
      <Grass />
    </>
  );
}
