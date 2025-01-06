import { useAuthenticator } from '@aws-amplify/ui-react';
import { Link, Route, Routes } from "react-router";
import { Container, Row, Col } from "react-bootstrap";

function About () {
  const { signOut } = useAuthenticator();

  return (      
    <Container>
      <h4>About RealGrappling</h4>
    </Container>
  );
};

export default About; 