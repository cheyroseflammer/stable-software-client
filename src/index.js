import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import Main from "./Main";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <Main /> */}
  </BrowserRouter>,
  document.getElementById("root")
);
