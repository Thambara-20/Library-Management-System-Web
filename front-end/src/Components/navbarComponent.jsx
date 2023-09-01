import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


class NavbarComponent extends Component {



  render() {

    return (

      <Navbar bg="dark" variant="dark" expand="lg" className="navbar" w>
        <Container className='container' >
          <Navbar.Brand as={Link} className="nav-item na-link" to="/">LBMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Nav.Link as={Link} className="nav-item nav-link" to="/Library">Library</Nav.Link>
              

              <NavDropdown title="Category" id="basic-nav-dropdown" >

                <NavDropdown.Item href="/">Marvel</NavDropdown.Item>
                <NavDropdown.Item href="/">Marvel</NavDropdown.Item>
                <NavDropdown.Item href="/">Marvel</NavDropdown.Item>
                <NavDropdown.Item href="/">Marvel</NavDropdown.Item>
                <NavDropdown.Item href="/">Marvel</NavDropdown.Item>
                <NavDropdown.Item href="/">Marvel</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/All">Separated link</NavDropdown.Item>
              </NavDropdown>
              

            </Nav>
            
            <Nav.Link as={Link} className="nav-item nav-link" to="/customer" style={{color: "white"}}>Contact Us</Nav.Link>

            <Link to="/signUP">
                <button className="login-button-css" onClick={this.props.onHandle} >Sign up</button>
              </Link>
              <Link to = "/register-page">
                <button className="login-button-css padding-css" >sign in</button>
              </Link>

              
          </Navbar.Collapse>
        </Container>


      </Navbar>



    )
  }
}

export default NavbarComponent;
