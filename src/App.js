import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import config from "./config";
import ApiContext from "./ApiContext";
import { InlineIcon } from "@iconify/react";
import horseshoeIcon from "@iconify-icons/mdi/horseshoe";

// layout
// import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer";
// import Signup from './components/layout/Signup';
// import Login from './components/layout/Login';

// ui
import AddRider from "./components/ui/AddRider";
import AddHorse from "./components/ui/AddHorse";
// import Schedule from '../inProgress/Schedule';

// pages
// import Home from './pages/Home';
// import RidersList from './pages/RidersList';
import HorseListMain from "./pages/HorseListMain";
import HorseListNav from "./pages/HorseListNav";
import HorsePageMain from "./pages/HorsePageMain";
import HorsePageNav from "./pages/HorsePageNav";

// styles
import "./App.css";

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
        {["/", "/rider/:riderId"].map((path) => (
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
        {["/", "/rider/:riderId"].map((path) => (
          <Route exact key={path} path={path} component={HorseListMain} />
        ))}
        <Route path="/horse/:horseId" component={HorsePageMain} />
        <Route path="/add-rider" component={AddRider} />
        <Route path="/add-horse" component={AddHorse} />
      </>
    );
  }
  render() {
    const value = {
      horses: this.state.horses,
      riders: this.state.riders,
      addRider: this.handleAddRider,
      addHorse: this.handleAddHorse,
      deleteHorse: this.handleDeleteHorse,
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <Router>
            <nav className="App-nav">{this.renderNavRoutes()}</nav>
            <header className="App-header">
              <h1>
                <Link to="/">
                  <InlineIcon icon={horseshoeIcon} /> STABLE SOFTWARE{" "}
                  <InlineIcon icon={horseshoeIcon} />
                </Link>{" "}
              </h1>
            </header>
            <main className="App-main">{this.renderMainRoutes()}</main>
          </Router>
          <Footer />
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
