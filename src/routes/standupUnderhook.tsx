import { lazy, Suspense, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Lazy-loaded components
const ComponentA = lazy(() => import("./standupCollarElbow"));
const ComponentB = lazy(() => import("./standupUnderhook"));
const ComponentC = lazy(() => import("./standupOverhook"));

const StandupUnderhook = () => {
  const [activeComponent, setActiveComponent] = useState("A"); // Manage active component

  const renderComponent = () => {
    switch (activeComponent) {
      case "A":
        return <ComponentA />;
      case "B":
        return <ComponentB />;
      case "C":
        return <ComponentC />;
      default:
        return <div>Select a component</div>;
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>You do something</Card.Title>
              <Card.Text>
                Here's a description of the something, step by step.
              </Card.Text>
              <Button className="orange-button" onClick={() => setActiveComponent("A")}>Reaction1</Button>
              <Button className="orange-button" onClick={() => setActiveComponent("B")}>Reaction2</Button>
              <Button className="orange-button" onClick={() => setActiveComponent("C")}>Reaction3</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      
      {/* Suspense fallback for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        {renderComponent()}
      </Suspense>
      </Row>
    </div>
  );
};

export default StandupUnderhook;
