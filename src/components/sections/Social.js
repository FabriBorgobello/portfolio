import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialCard } from "./SocialCard";
import "./Social.css";

export const Social = () => {
  return (
    <Container id="social">
      <div className="socialContainer">
        <h1>Let's be friends</h1>
      </div>
      <div className="socialShowcase">
        <Row>
          <Col xs={12} md={3}>
            <a
              href="https://www.linkedin.com/in/fabricio-borgobello-59468775/"
              target="_blank"
            >
              <SocialCard icon="fab fa-linkedin" color="688AE0" />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <a
              href="https://github.com/FabriBorgobello"
              target="_blank"
            >
              <SocialCard icon="fab fa-github-square" color="68E0BC" />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <a
              href="https://twitter.com/fabriborgobello"
              target="_blank"
            >
              <SocialCard icon="fab fa-twitter-square" color="68D9E0" />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <a
              href="https://www.instagram.com/fabriborgobello/"
              target="_blank"
            >
              <SocialCard icon="fab fa-instagram-square" color="E068CC" />
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
