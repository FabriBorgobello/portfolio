import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
import headerPhoto from "../../img/illustration4.svg";

export const Header = () => {
  return (
    <Container fluid id="header">
      <Row>
        <Col xs={12} lg={4}>
          <div id="headerContainerLeft" className="headerContainer">
            <span id="greeting">
              Hey there! I'm Fabricio Borgobello and i'm a front-end developer.
              Let's talk!
            </span>
            <div id="buttonContainer">
              <div class="CTA">
                <a href="#contact">CONTACT ME</a>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={8}>
          <div id="headerContainerRight" className="headerContainer">
            <img className="headerPhoto" src={headerPhoto} alt="headerPhoto" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
