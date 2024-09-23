import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = ()=>(
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">libreria Virtual</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nab"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                
            </Nav>
        </Navbar.Collapse>
    </Navbar>

);

export default Header;