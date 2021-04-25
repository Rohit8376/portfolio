import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/indexabc.css"
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Footer /> */}
  </>,

  document.getElementById("root")
);
