import { useState } from "react";
import data from "../data.json"; // Import the JSON file
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Define the type for items in the data array
interface DataItem {
  id: string;        // Assuming 'id' is a string (use 'number' if it's a number)
  why: string;
  name: string;
  description: string;
}

const StandupOverhook = () => {
  const [activeItem, setActiveItem] = useState<DataItem | null>(null); // State for the active item

  const handleButtonClick = (item: DataItem) => {
    // Set the clicked item as the active one
    setActiveItem(item);
  };

  return (
    <div style={{ padding: "20px" }}>
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
              </Card.Text>

              {/* Buttons to show data */}
              {data.map((item) => (
                <Button className="reactionButton" variant="warning" key={item.id} onClick={() => handleButtonClick(item)}>
                  Reaction: {item.why}
                </Button>
              ))}
              {/* Dynamically rendered component */}
              <div style={{ marginTop: "20px" }}>
                {activeItem && (
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <h2>{activeItem.name}</h2>
                    <p>{activeItem.description}</p>
                    <Button className="reactionButton" variant="warning" onClick={() => setActiveItem(null)}>
                      Remove
                    </Button>
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StandupOverhook;
