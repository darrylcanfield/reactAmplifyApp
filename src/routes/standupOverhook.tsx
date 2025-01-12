import { useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import data from "../data.json"; // Import the JSON file
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";

const client = generateClient<Schema>();

// Define the type for items in the data array
interface DataItem {
  id: string;
  why: string;
  name: string;
  description: string;
  img: string;
  b1: string;
  b2: string;
}

const StandupOverhook = () => {
  const [activeItem, setActiveItem] = useState<DataItem | null>(null); // State for the active item
  const [notification, setNotification] = useState<string | null>(null); // State for notification message

  // Function for creating a todo with activeItem.name
  function createTodo(content: string) {
    if (!content.trim()) return; // Prevent creating empty todos

    client.models.Todo.create({ content });

    // Set a success message for a new todo
    setNotification(`Favorite added: "${content}"`);

    // Clear the notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
  }

  // Handle button click to set the active item
  const handleButtonClick = (item: DataItem) => {
    setActiveItem(item);
  };

  return (
    <Container fluid>
      <Row>
      {/* Display the notification message */}
      {notification && (
        <div
          style={{
            backgroundColor: "#28a745", // Green background
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          {notification}
        </div>
      )}
    
    
        <Col>
          <Card>
            <Card.Body>
            <Row>
            <h3>Attacking From Half Guard</h3>
            </Row>
              <Row>
                <Col>
                    <img className="realimg" src="https://i.ytimg.com/vi/Q_WjpBd_Yz8/hq720.jpg"/>
                </Col>
                <Col>
                   <strong>Cross side knee cut:</strong> Getting the instep, keeping the underhook, knee cutting through.
                </Col>
              </Row>

              {/* Buttons to show data */}
              <Row>
              {data
              .filter((item) => item.sub === "passingHalfGuard")  // Filter items where 'sub' equals "attackingOpenGuard"
              .map((item) => (
                <Col key={item.id}> {/* Ensure 'key' is set to 'item.id' */}
                  <Button className="reactionButton" variant="warning" onClick={() => handleButtonClick(item)}>
                    Reaction: {item.why}
                  </Button>
                </Col>
              ))}
              </Row>
              
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
                  <Row>
                    <Col><img  className="realimg" src={activeItem.img} /></Col>
                      <Col>
                   <strong>{activeItem.name}: </strong>{activeItem.description}
                   <Container>
                    <Button
                        variant="primary"
                        onClick={() => {
                          if (activeItem) {
                            createTodo(activeItem.name);
                          } else {
                            alert("No active item selected");
                          }
                        }}
                      >+Favorite
                      </Button>
                  </Container>
                   
                </Col>
                  </Row>
                  

                    {/* Buttons to show data */}
              <Row>
                <Col>
                <Button className="reactionButton" variant="success">
                   {activeItem.b1}
                </Button>
                </Col>
                <Col>
                <Button className="reactionButton" variant="warning">
                   {activeItem.b2}
                </Button>
                </Col>
              </Row>

                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StandupOverhook;
