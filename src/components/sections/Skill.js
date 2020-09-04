import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SkillCard } from "./SkillCard";
import "./Skill.css";
import foto from "../../img/illustration2.svg";

export const Skill = () => {
  return (
    <Container id="skill">
      <div className="skillContainer">
        <h1>Skills & Services</h1>
        <p>
          I specialize in HTML, CSS and JavaScript on the frontend. I'm also pretty confortable working with Figma and other design tools!
        </p>
      </div>
      <Row>
        <Col xs={12} lg={6}>
          <div className="skillContainerLeft">
            <img className="skillPhoto" src={foto} alt="skillPhoto" />
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <div className="skillShowcase">
            <Row>
              <Col xs={6} md={6}>
                <SkillCard icon="fab fa-html5" text="HTML" color="F17E48" />
              </Col>
              <Col xs={6} md={6}>
                <SkillCard icon="fab fa-css3-alt" text="CSS" color="4878F1" />
              </Col>
              <Col xs={6} md={6}>
                <SkillCard icon="fab fa-js" text="JavaScript" color="E4F148" />
              </Col>
              <Col xs={6} md={6}>
                <SkillCard icon="fab fa-bootstrap" text="Bootstrap" color="9348F1" />
              </Col>
              <Col xs={6} md={6}>
                <SkillCard icon="fab fa-react" text="ReactJs" color="48B4F1" />
              </Col>
              <Col xs={6} md={6}>
                <SkillCard icon="fab fa-figma" text="Figma" color="F15248" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
