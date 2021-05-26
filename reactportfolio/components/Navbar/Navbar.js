import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';

const Navbar = () => {
    return (
        <div className="Navbar">
          <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <ReactBootStrap.Navbar.Brand href="#home">Logo</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="#about">About</ReactBootStrap.Nav.Link>
          <ReactBootStrap.NavDropdown title="Projects" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item href="project/1">Project 1</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#project/2">Project 2</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#project/3">Project 3</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link href="#contact">Contact</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
        </div>
      );
    }

export default Navbar
