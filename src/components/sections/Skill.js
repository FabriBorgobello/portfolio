import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import foto from "../../img/542-500x500.jpg";

export const Skill = () => {
  return (
    <Container className="skill">
      <Container fluid>
        <Row>
          <Col xs={12} lg={6}>
            <div className="skillContainerLeft">
              <h1>Skills & Services</h1>
              <p>
                I specialize in HTML, CSS and JavaScript on the frontend, but
                I'm pretty comfortable with Wordpress as well!
              </p>
              <div className="skill-showcase">
                <Row>
                  <Col xs={12} md={6}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={6}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={6}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={6}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="skillContainerRight">
              <img className="skillFoto" src={foto} alt="skillFoto" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

//Card
{
  /* <div className="skill-item">
  <svg></svg>
  <h3>Web Design & Development</h3>
  <p>HTML, CSS, JavaScript? You name it. I got it covered!</p>
</div>; */
}
