import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import foto from "../../img/542-500x500.jpg";

export const Contact = () => {
  return (
    <Container id="contact" className="contact">
      <Row>
        <Col xs={12} lg={6}>
          <div className="contactContainerLeft">
            <img className="contactFoto" src={foto} alt="contactFoto" />
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <div className="contactContainerRight">
            <h1>contact Me</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
