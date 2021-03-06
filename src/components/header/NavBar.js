import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="sticky-top">
      <Navbar id="main" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid id="navContent">
          <Navbar.Brand
            id="brand"
            className="nav-link d-flex justify-content-center"
            href="#home"
          >
            <span className="textLogo">FABRICIO BORGO</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav pricipal">
            <Nav id="options" className="ml-auto">
              <li>
                <Nav.Link className="navLink" href="#header">
                  <span className="navText">Home</span>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link className="navLink" eventKey={2} href="#about">
                  <span className="navText">About</span>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link className="navLink" eventKey={3} href="#work">
                  <span className="navText">Work</span>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link className="navLink" eventKey={4} href="#contact">
                  <span className="navText" id="optionContact">
                    Contact
                  </span>
                </Nav.Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

