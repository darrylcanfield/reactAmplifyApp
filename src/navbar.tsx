import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthenticator } from '@aws-amplify/ui-react';

function NavBar() {
  const { signOut } = useAuthenticator();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">RealGrappling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/transitions">All Transitions</Nav.Link>
            <NavDropdown title="Throws & Takedows" id="basic-nav-dropdown">
              <NavDropdown.Item href="/standupCollarSleeve">Standup: Collar & Sleeve</NavDropdown.Item>
              <NavDropdown.Item href="/standupCrossLapel">Standup: Cross Lapel</NavDropdown.Item>
              <NavDropdown.Item href="/standupLapelAndElbow">Standup: Lapel & Elbow</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Guard Passing" id="basic-nav-dropdown">
            <NavDropdown.Item href="/passingOpenGuard">Pass Open Guard</NavDropdown.Item>
              <NavDropdown.Item href="/passingHalfGuard">Pass Half Guard</NavDropdown.Item>
              <NavDropdown.Item href="/passingSingleLegX">Pass Single Leg X</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Guard Attacks / Retention" id="basic-nav-dropdown">
              <NavDropdown.Item href="/attackingOpenGuard">Attacking from Open Guard</NavDropdown.Item>
              <NavDropdown.Item href="/attackingHalfGuard">Attacking from Half Guard</NavDropdown.Item>
              <NavDropdown.Item href="/attackingSingleLegX">Attacking from Single Leg X</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/myList">My List</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <button onClick={signOut}>Sign out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;