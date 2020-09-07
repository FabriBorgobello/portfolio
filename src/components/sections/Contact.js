import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import foto from "../../img/illustration1.svg";
import "./Contact.css";

export const Contact = () => {
  return (
    <Container id="contact" className="contact">
      <Row>
        <Col xs={12} lg={6}>
          <div className="contactContainerLeft">
            <h1>Contact Me</h1>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="mb-2 mr-sm-2"
                  id="forName"
                  placeholder="Name"
                  type="text"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Leave your message"
                  required
                />
              </Form.Group>
              <br />
              <Button variant="danger" type="submit" size="lg" block>
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <div className="contactContainerRight">
            <img className="contactFoto" src={foto} alt="contactFoto" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
