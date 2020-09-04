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
              <Form.Group controlId="forName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="mb-2 mr-sm-2"
                  id="forName"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Leave your message"
                />
              </Form.Group>
              <br/>
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
