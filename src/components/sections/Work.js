import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Work.css";
import { WorkCard } from "./WorkCard";
import photoGoogle from "../../img/google.png";
import photoFacebook from "../../img/facebook.png";
import photoAmazon from "../../img/amazon.png";

export const Work = () => {
  return (
    <Container id="work" className="work">
      <h1>Recent Projects</h1>
      <div className="work-showcase">
        <Row>
          <Col xs={12} md={4}>
            <WorkCard
              projectName="Google"
              projectInfo="Web browser built with C++"
              photo={photoGoogle}
            />
          </Col>
          <Col xs={12} md={4}>
            <WorkCard
              projectName="Facebook"
              projectInfo="Social Network built with React"
              photo={photoFacebook}
            />
          </Col>
          <Col xs={12} md={4}>
            <WorkCard
              projectName="Amazon"
              projectInfo="E-Commerce built with React and Node."
              photo={photoAmazon}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
