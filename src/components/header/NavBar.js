import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import foto from "../../img/542-500x500.jpg";

export const NavBar = () => {
  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand className="logo nav-link" href="#home">
          <img
            src={foto}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          Fabricio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <li>
              <Nav.Link className="nav-link" href="#home">
                <span>Home</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link className="nav-link" eventKey={2} href="#about">
                <span>About</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link className="nav-link" eventKey={3} href="#work">
                <span>Work</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link className="nav-link" eventKey={4} href="#contact">
                <span>Contact</span>
              </Nav.Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

{
  /* <nav>
          <div className="navContainer">
            <a className="logo" href="logo.com">
              <img src="" alt="" />
            </a>
            <ul>
              <li className="navElement"><a className="navLink" href="google.com"><span>Home</span></a></li>
              <li className="navElement"><a className="navLink" href="google.com"><span>About</span></a></li>
              <li className="navElement"><a className="navLink" href="google.com"><span>Work</span></a></li>
              <li className="navElement"><a className="navLink" href="google.com"><span>Contact</span></a></li>
            </ul>
            <div className="hamburguer"></div>
          </div>
        </nav> */
}
