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
              <NavDropdown.Item href="/standupLapelAndElbow">Standup: Lapel & Elbow</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Guard Passing" id="basic-nav-dropdown">
            <NavDropdown.Item href="/passingOpenGuard">Pass Open Guard</NavDropdown.Item>
              <NavDropdown.Item href="/passingHalfGuard">Pass Half Guard</NavDropdown.Item>
              <NavDropdown.Item href="/passingSingleLegX">Pass Single Leg X</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Guard Attacks" id="basic-nav-dropdown">
              <NavDropdown.Item href="/attackingOpenGuard">Attacking from Open Guard</NavDropdown.Item>
              <NavDropdown.Item href="/attackingHalfGuard">Attacking from Half Guard</NavDropdown.Item>
              <NavDropdown.Item href="/attackingSingleLegX">Attacking from Single Leg X</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/transitions">Transitions</Nav.Link>         
            <Nav.Link href="/myList">MyList</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <button onClick={signOut}>Sign out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;