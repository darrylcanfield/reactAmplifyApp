import { Container, Row} from "react-bootstrap";

function MyList() {

  return (
    <Container fluid>
      <Row>
        <div>  
          <Container fluid className="text-center">
            <h4>RealGrappling: Grappling & Jiu-Jitsu that works.</h4>
          </Container>
          <Container fluid className="text-center">
            <h5><span className="dantred">Latest: </span>Jozef Chen's <a href="http://localhost:5173/passingHalfButterflyFloating">float passing sequences</a> showcased at ADCC</h5>
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
