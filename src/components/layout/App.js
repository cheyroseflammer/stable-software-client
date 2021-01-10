import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import config from "../../config";
import ApiContext from "../../ApiContext";

import Landing from "./Landing";

// ui
import AddRider from "../ui/AddRider";
import AddHorse from "../ui/AddHorse";
import EditHorse from "../ui/EditHorse";
import Grass from "../ui/Grass";

// pages
import HorseListMain from "../../pages/HorseListMain";
import HorseListNav from "../../pages/HorseListNav";
import HorsePageMain from "../../pages/HorsePageMain";
import HorsePageNav from "../../pages/HorsePageNav";

// styles
import "../../styles/Main.css";
class App extends Component {
  state = {
    horses: [],
    riders: [],
  };
  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/horses`),
      fetch(`${config.API_ENDPOINT}/riders`),
    ])
      .then(([horsesRes, ridersRes]) => {
        if (!horsesRes.ok)
          return horsesRes.json().then((e) => Promise.reject(e));
        if (!ridersRes.ok)
          return ridersRes.json().then((e) => Promise.reject(e));

        return Promise.all([horsesRes.json(), ridersRes.json()]);
      })
      .then(([horses, riders]) => {
        this.setState({ horses, riders });
      })
      .catch((error) => {
        console.error({ error });
      });
  }
  handleAddRider = (rider) => {
    this.setState({
      riders: [...this.state.riders, rider],
    });
  };
  handleAddHorse = (horse) => {
    this.setState({
      horses: [...this.state.horses, horse],
    });
  };
  handleDeleteHorse = (horseId) => {
    this.setState({
      horses: this.state.horses.filter((horse) => horse.id !== horseId),
    });
  };
  renderNavRoutes() {
    return (
      <>
        {["/main", "/rider/:riderId"].map((path) => (
          <Route exact key={path} path={path} component={HorseListNav} />
        ))}
        <Route path="/horse/:horseId" component={HorsePageNav} />
        <Route path="/add-rider" component={HorsePageNav} />
        <Route path="/add-horse" component={HorsePageNav} />
      </>
    );
  }
  renderMainRoutes() {
    return (
      <>
        {["/main", "/rider/:riderId"].map((path) => (
          <Route exact key={path} path={path} component={HorseListMain} />
        ))}
        <Route path="/horse/:horseId" component={HorsePageMain} />
        <Route path="/add-rider" component={AddRider} />
        <Route path="/add-horse" component={AddHorse} />
        <Route path="/edit/:horseId" component={EditHorse} />
      </>
    );
  }
  updateHorse = (updatedHorse) => {
    const newHorse = this.state.horses.map((horse) =>
      horse.id === updatedHorse.id ? updatedHorse : horse
    );
    this.setState({
      horses: newHorse,
    });
  };
  render() {
    const value = {
      horses: this.state.horses,
      riders: this.state.riders,
      addRider: this.handleAddRider,
      addHorse: this.handleAddHorse,
      deleteHorse: this.handleDeleteHorse,
      updateHorse: this.updateHorse,
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <Router>
            <nav className="App-nav">{this.renderNavRoutes()}</nav>
            <header className="App-header">
              <Link to="/main">
                <h1>Stable Software 🐴</h1>
              </Link>
            </header>
            <main className="App-main">{this.renderMainRoutes()}</main>
            <Switch>
              <Route exact path="/" component={Landing} />
              {/* <Route path="/main" component={Main} /> */}
            </Switch>
          </Router>
          <Grass />
        </div>
      </ApiContext.Provider>
    );
  }
}
export default App;
