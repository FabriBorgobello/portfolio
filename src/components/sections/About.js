import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import foto from "../../img/myPhoto.png";
import "./About.css";

export const About = () => {
  return (
    <Container id="about" className="about">
      <Row>
        <Col xs={12} lg={6}>
          <div className="aboutContainerLeft">
            <img className="aboutPhoto" src={foto} alt="aboutPhoto" />
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <div className="aboutContainerRight">
            <h1>About Me</h1>
            <p>
              I am a junior front-end web developer form Argentina and love spending my time
              experimenting and learning new technologies. I started studying
              web development in 2019 as a hobby. Right now, I want to become a
              great JavaScript developer, so I already started working with
              React Js and soon I'll start with Node too! My main goal is to
              create beautiful products and experiences.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
