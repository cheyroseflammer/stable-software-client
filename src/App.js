import React from "react";
import { Link } from "react-router-dom";
import AddButton from "./components/ui/AddButton";
import "./styles/AddButton.css";

import Landing from "./Landing";

// import config from "./config";
// import ApiContext from "./ApiContext";

// import Welcome from "./components/layout/Welcome";
import Main from "./Main";

export default class App extends React.Component {
  render() {
    return (
      <div className="">
        <Landing>
          {/* <Link to="/main" component={Main}>
            click me
          </Link>
          <AddButton
            tag={Link}
            to="/main"
            type="button"
            className="get-started"
          >
            Get started
          </AddButton> */}
        </Landing>
      </div>
      // <section>
      //   <header>
      //     <h1 className="petful">Stable Software</h1>
      //   </header>
      //   <div className="button-container">
      //     <AddButton
      //       tag={Link}
      //       to="/main"
      //       type="button"
      //       className="get-started"
      //     >
      //       Get started
      //     </AddButton>
      //   </div>
      // </section>
    );
  }
}
