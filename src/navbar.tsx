import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthenticator } from '@aws-amplify/ui-react';

function NavBar() {
  const { signOut } = useAuthenticator();
  return (
    <Navbar expand="lg" bg="white" className="fixed-top">
      <Container>
        <Navbar.Brand href="/"><h3>RealGrappling</h3></Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Throws & Takedowns" id="basic-nav-dropdown">
              <NavDropdown.Item href="/standupUnderhook">Standup: Underhook</NavDropdown.Item>
              <NavDropdown.Item href="/standupOverhook">Standup: Overhook</NavDropdown.Item>
              <NavDropdown.Item href="/standupCollarTie">Standup: Collar Tie</NavDropdown.Item>
              <NavDropdown.Item href="/standupWristControl">Standup: Wrist Control</NavDropdown.Item>
              <NavDropdown.Item href="/standup2on1WristControl">Standup: 2on1 Wrist Control</NavDropdown.Item>
              <NavDropdown.Item href="/standupRussian">Standup: Russian</NavDropdown.Item>
              <NavDropdown.Item href="/standupNoGrips">Standup: No Grips</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Guard Passing" id="basic-nav-dropdown">
              <NavDropdown.Item href="/passingOpenGuardSupine">Pass Open Guard (Supine)</NavDropdown.Item>
              <NavDropdown.Item href="/passingOpenGuardSeated">Pass Open Guard (Seated)</NavDropdown.Item>
              <NavDropdown.Item href="/passingHalfGuardStanding">Pass Half Guard (Standing)</NavDropdown.Item>
              <NavDropdown.Item href="/passingHalfGuardKneeling">Pass Half Guard (Kneeling)</NavDropdown.Item>
              <NavDropdown.Item href="/passingHalfButterfly">Pass Half Guard (Butterfly)</NavDropdown.Item>
              <NavDropdown.Item href="/passingButterflyGuard">Pass Butterfly Guard</NavDropdown.Item>
              <NavDropdown.Item href="/passingHeadquarters">Pass Headquarters</NavDropdown.Item>
              <NavDropdown.Item href="/passingSingleLegX">Pass Single Leg X</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Top Attacks" id="basic-nav-dropdown">
              <NavDropdown.Item href="/attackingSideControl">Side Control</NavDropdown.Item>
              <NavDropdown.Item href="/attackingTurtle">Turtle</NavDropdown.Item>
              <NavDropdown.Item href="/attackingBack">Back</NavDropdown.Item>
              <NavDropdown.Item href="/attackingMount">Mount</NavDropdown.Item>
              <NavDropdown.Item href="/attackingNorthSouth">North South</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Guard Attacks" id="basic-nav-dropdown">
              <NavDropdown.Item href="/attackingClosedGuard">Closed Guard</NavDropdown.Item>
              <NavDropdown.Item href="/attackingShinToShin">Shin to Shin</NavDropdown.Item>
              <NavDropdown.Item href="/attackingSingleLegX">Single Leg X</NavDropdown.Item>              
              <NavDropdown.Item href="/attackingHalfGuard">Half Guard</NavDropdown.Item>
              <NavDropdown.Item href="/attackingButterflyGuard">Butterfly Guard</NavDropdown.Item>
              <NavDropdown.Item href="/attackingHalfButterfly">Half Butterfly</NavDropdown.Item>
              <NavDropdown.Item href="/attackingDeLaRiva">DLR</NavDropdown.Item>
              <NavDropdown.Item href="/attackingChoiGuard">Choi Guard</NavDropdown.Item>
              <NavDropdown.Item href="/attackingKGuard">K Guard</NavDropdown.Item>
              <NavDropdown.Item href="/attackingOctopusGuard">Octopus Guard</NavDropdown.Item>
              <NavDropdown.Item href="/attackingCrabRide">CrabRide</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/attackingInsideReap">Inside Reap</NavDropdown.Item>
              <NavDropdown.Item href="/attackingOutsideAshi">Outside Ashi</NavDropdown.Item>
              <NavDropdown.Item href="/attackingOutsideReap">Outside Reap</NavDropdown.Item>
              <NavDropdown.Item href="/attacking5050">50/50</NavDropdown.Item>
              <NavDropdown.Item href="/attackingReverseXGuard">Reverse X Guard</NavDropdown.Item>
              <NavDropdown.Item href="/attackingInvertedGuard">Inverted Guard</NavDropdown.Item>
              <NavDropdown.Item href="/attackingLegDragGuard">Leg Drag Guard</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/transitions">Transitions</NavDropdown.Item>
              <NavDropdown.Item href="/myList">MyList</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
            </NavDropdown>
            <button onClick={signOut}>Sign out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;