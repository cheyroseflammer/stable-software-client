import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// layout
import Nav from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Signup from './components/layout/Signup';
import Login from './components/layout/Login';

// ui
import AddRider from './components/ui/AddRider';
import AddHorse from './components/ui/AddHorse';
// import Schedule from '../inProgress/Schedule';

// pages
import Home from './pages/Home';
import Riders from './pages/RidersList';
import Horses from './pages/Horses';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/horses" exact component={Horses} />
          <Route path="/riders" exact component={Riders} />
          {/* <Route path="/schedule" exact component={Schedule} /> */}
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/addrider" exact component={AddRider} />
          <Route path="/addhorse" exact component={AddHorse} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
