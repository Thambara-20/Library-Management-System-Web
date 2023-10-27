import React from "react";
import App from "./App";
import reportWebVitals from "./ReportWebVitals";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter} from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";



ReactDOM.render(
  <HashRouter >
    <App />
  </HashRouter>,
  document.getElementById("root")
);
reportWebVitals();
