import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* Sticky Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand href="#">Sticky Template</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content Container */}
      <Container className="content-container">
        <h1 className="text-center mb-4">React Bootstrap Template</h1>

        {/* Content with Cards */}
        <Row>
          <Col md={4} sm={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Card Title 1</Card.Title>
                <Card.Text>
                  This is a description of the card. It can hold some information or content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Card Title 2</Card.Title>
                <Card.Text>
                  Another card with different content. You can customize each card as needed.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Card Title 3</Card.Title>
                <Card.Text>
                  A description for another card. Bootstrap's grid system and cards are easy to use.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* More Cards */}
        <Row>
          <Col md={4} sm={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Card Title 4</Card.Title>
                <Card.Text>
                  Here’s an additional card for testing layout. Cards are very flexible.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Card Title 5</Card.Title>
                <Card.Text>
                  More content for testing the footer and sticky behavior.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Card Title 6</Card.Title>
                <Card.Text>
                  This is yet another card with sample content. Adjust as necessary.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Sticky Footer */}
      <footer className="bg-dark text-white text-center py-3 sticky-footer">
        <p>&copy; 2025 Sticky Footer Template. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
