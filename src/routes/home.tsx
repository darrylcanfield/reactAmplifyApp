import { Container, Row} from "react-bootstrap";

function MyList() {

  return (
    <Container fluid>
      <Row>
        <div>  
          <Container fluid className="text-center">
            <h4>Grappling & Jiu-Jitsu that works.</h4>
          </Container>
          <Container className="text-center">
            <img src="https://real-grappling-bucket.s3.us-east-1.amazonaws.com/real-grappling-jiujitsu.png" alt="description" className="img-fluid" />
          </Container>
      </div>
      </Row>
    </Container>

    
  );
}

export default MyList;
