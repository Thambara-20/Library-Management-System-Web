import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';

class NavbarComponent extends Component {

  render() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="link-css nav-link" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/Library">Library</Link>
              <Link className="nav-link" to="/Library">About Us</Link>
              <Link className="nav-link" to="/contactUs">Contact Us</Link>
              <button className="login-button-css ">sign in</button>
              <button className="login-button-css padding-css" >sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  


}

export default NavbarComponent;
