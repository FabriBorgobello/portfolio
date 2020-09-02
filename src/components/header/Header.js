import React from "react";
import { NavBar } from "./NavBar";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
import foto from '../../img/542-500x500.jpg';

export const Header = () => {
  return (
    <div>
      <header id="home">
        {/* <NavBar /> */}
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <div className="headerContainerLeft">
                <p>
                  Hey there! I'm Fabricio Borgobello and i'm a front-end
                  developer. Let's talk!
                </p>
                <button className="CTA">Contact Me</button>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="headerContainerRight">
                <img className="headerFoto" src={foto} alt="headerFoto" />
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

{
  /* <div className="headerContainer">
          <div className="headerContainerLeft">
            <p>Hey there! I'm Fabricio Borgobello and i'm a front-end developer. Let's talk!</p>
            <button className="CTA">Contact Me</button>
          </div>
          <div className="headerContainerRight">
            <img className="headerFoto" src="" alt="headerFoto" />
          </div>
        </div> */
}
