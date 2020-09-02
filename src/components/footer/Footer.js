import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid>
      <div className="footer">
        <Row>
          <Col xs={12} md={6}>
            <p>Designed and developed by Fabricio.</p>
          </Col>
          <Col xs={12} md={6}>
            <p>Alguna otra cuestión.</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
