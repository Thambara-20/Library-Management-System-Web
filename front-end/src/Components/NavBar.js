import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import SignupButton from './Button.Signup';
import SigninButton from './Button.Signin';
import "../Styles/Navbar.css"
function NavBar() {
    return (

        <Navbar bg={"dark"} variant={"dark"} expand="lg" className="navbar" >
            <Container className='container'  >
                <Navbar.Brand as={Link} className="nav-item nav-link" to="/">CTR Library</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Nav.Link as={Link} className="nav-item nav-link" to="/Library">Library</Nav.Link>
                        <Nav.Link as={Link} className="nav-item nav-link" to="/Contact">Contact Us</Nav.Link>

                        {/* <NavDropdown title="Category" id="basic-nav-dropdown" >

                            <NavDropdown.Item href="/design">Design</NavDropdown.Item>
                            <NavDropdown.Item href="/potrait">Potrait</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/All">Separated link</NavDropdown.Item>
                        </NavDropdown> */}

                        <form class="d-flex" role="search" >
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" color="grey" />
                            <button class="btn btn-light" type="submit" >Search</button>
         
                        </form>

                    </Nav>
                    <SignupButton/>
                    <SigninButton/>

                </Navbar.Collapse>
            </Container>


        </Navbar>

    )
}


export default NavBar