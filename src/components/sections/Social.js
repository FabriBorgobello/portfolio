import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import foto from "../../img/542-500x500.jpg";

export const Social = () => {
  return (
    <Container className="social">
      <h1>Let's be friends</h1>
      <div className="work-showcase">
        <Row>
          <Col xs={6} md={3}>
            <img src={foto} alt="Social" width="100" height="100" />
          </Col>
          <Col xs={6} md={3}>
            <img src={foto} alt="Social" width="100" height="100" />
          </Col>
          <Col xs={6} md={3}>
            <img src={foto} alt="Social" width="100" height="100" />
          </Col>
          <Col xs={6} md={3}>
            <img src={foto} alt="Social" width="100" height="100" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
