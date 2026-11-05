import { Container} from "react-bootstrap";

function About () {

  return (   
    <section className="py-5 rg-body">
      <Container>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">

            <h2 className="mb-4">About RealGrappling</h2>

            <p>
              RealGrappling was created by <strong>Darryl Canfield</strong>, a student of
              Marcelo Garcia and Murilo Santana who has been training grappling and
              Jiu-Jitsu for 20 years, and teaching on the Jersey Shore for 10.
            </p>
            <p>
              He has trained with some of the best grapplers in the world, and continually
              studies and breaks down the games of the most dominant competitors, and true innovators of the sport.
            </p>

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

          </div>
        </div>
      </Container>
    </section>
  );
};

export default About; 