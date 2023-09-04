import React from "react";
import App from "./App";
import reportWebVitals from "./ReportWebVitals";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./Index.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Components/SearchBar"


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
