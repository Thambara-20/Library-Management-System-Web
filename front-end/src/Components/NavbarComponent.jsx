import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComponent = ()=> {

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(true);
   
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
          
          <Nav.Link as={Link} className="nav-item nav-link" to="/ContactUs" style={{color: "white"}}>Contact Us</Nav.Link>
          {isAdminLoggedIn && <Nav.Link as={Link} className="nav-item nav-link" to="/admin" style={{color: "white"}}>Admin</Nav.Link>}

          <Link to="/SignInPage">
              <button className="login-button-css" >Sign in</button>
            </Link>
              <button className="login-button-css padding-css" >sign up</button>

            
        </Navbar.Collapse>
      </Container>


    </Navbar>



  )
}


export default NavbarComponent;