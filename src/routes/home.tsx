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
            <h5><span className="dantred">Latest: </span>Jozef Chen's <a href="/passingHalfButterflyFloating">float passing sequences</a> showcased at ADCC</h5>
          </Container>
          <Container className="text-center">
            <img src="https://real-grappling-bucket.s3.us-east-1.amazonaws.com/real-grappling-jiujitsu.png" alt="description" className="img-fluid" />
          <div className="card mt-4">
              <div className="card-body">
                <p className="mb-3">
                  This app exclusively features transitions and submissions that have been 
                  <strong> proven successful in competition</strong>, from grapplers such as:
                </p>

                <ul className="list-unstyled row rg-athletes mb-0">
                  <li className="col-6 col-md-4">Jozef Chen</li>
                  <li className="col-6 col-md-4">Gordon Ryan</li>
                  <li className="col-6 col-md-4">Craig Jones</li>
                  <li className="col-6 col-md-4">Levi Jones-Leary</li>
                  <li className="col-6 col-md-4">Diego Pato</li>
                  <li className="col-6 col-md-4">Mica Galvão</li>
                  <li className="col-6 col-md-4">Murilo Santana</li>
                  <li className="col-6 col-md-4">Pawel Jaworski</li>
                  <li className="col-6 col-md-4">Dan Covel</li>
                  <li className="col-6 col-md-4">Ruotolo Bros</li>
                  <li className="col-6 col-md-4">Junny Ocasio</li>
                  <li className="col-6 col-md-4">Nick Rodriguez</li>
                  <li className="col-6 col-md-4">Mikey Musumeci</li>
                  <li className="col-6 col-md-4">Giancarlo Bodoni</li>
                  <li className="col-6 col-md-4 font-italic text-muted">…and many more!</li>
                </ul>
              </div>
            </div>
          </Container>
      </div>
      </Row>
    </Container>

    
  );
}

export default MyList;
