import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PassingOpenGuard() {
  return (
    <Container fluid>
      <Row>
      <Col>
        <Card>
          <Card.Img variant="top" src="https://i.ytimg.com/vi/Q_WjpBd_Yz8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDjCwWPPylEfmaS7PMJpHdibbaksg" />
            <Card.Body>
              <Card.Title>Passing Half Guard</Card.Title>
              <Card.Text>
                <div>
                    <strong>Cross side knee cut:</strong> Getting the instep, keeping the underhook, knee cutting through.
                </div>
              <div className="mx-3"></div> {/* Adds horizontal margin */}
              <div className="mx-3"></div> {/* Adds horizontal margin */}
              <Row>
                <h5>Reactions:</h5>  
                <Button className="reactionButton" variant="warning">They pummel the underhook - Body Lock Pass</Button>
                <Button className="reactionButton" variant="warning">They create space and lift their knee - Pancake Pass</Button>
                <Button className="reactionButton" variant="warning">They bring their top leg over - Double Unders Pass</Button>
              </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}  
    </Container>
  );
}
  export default PassingOpenGuard;