import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import companylogo from "./companylogo.png";
import "./App.css";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  function handleNavbarToggle() {
    setExpanded(!expanded);
  }

  return (
    <Navbar
      expand="md"
      collapseOnSelect
      expanded={expanded}
      className={`navbar navbar-expand-md navbar-dark fixed-top ${expanded ? 'expanded' : ''}`}
    >
      <Navbar.Brand>
        <img alt="companylogo" src={companylogo} className="logo-image" />
        <span className="company-name ml-1">Patel Innovations</span>
      </Navbar.Brand>
      <Navbar.Toggle onClick={handleNavbarToggle} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <div className="navbar-links">
          <Nav>
            <Nav.Item className="nav-link rounded">
              <Button
                as={Link}
                to="/"
                onClick={() => setExpanded(false)}
                className="transparent-button"
              >
                Home
              </Button>
            </Nav.Item>
            <Nav.Item className="nav-link rounded">
              <Button
                as={Link}
                to="/services"
                onClick={() => setExpanded(false)}
                className="transparent-button"
              >
                Services
              </Button>
            </Nav.Item>
            <Nav.Item className="nav-link rounded">
              <Button
                as={Link}
                to="/contact"
                onClick={() => setExpanded(false)}
                className="transparent-button"
              >
                Contact
              </Button>
            </Nav.Item>
            <Nav.Item className="nav-link rounded">
              <Button
                as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
                className="transparent-button"
              >
                About
              </Button>
            </Nav.Item>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
