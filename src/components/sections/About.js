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
              I am a web developer and designer. My passion is to create
              beautiful experiences. I spend my time experimenting and
              researching the latest technology. I pledge to be a lifelong
              learner; it empowers me to create magnificent products. I started
              learning HTML as a hobbyist, after witnessing its tremendous
              capabilities, I was blown away by its potential! Soon, I started
              learning JavaScript, A language with no limitations. Now I hope to
              design masterpieces using the skills I've learned.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
