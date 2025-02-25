import { useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import data from "../data.json"; // Import the JSON file
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";

// *** Change targetId, item.sub, and the export and function ***

const client = generateClient<Schema>();

// Define the type for items in the data array
interface DataItem {
  id: string;
  why: string;
  name: string;
  description: string;
  b1: string;
  b2: string;
  b1l: string;
  b2l: string;
  ex1: string;
  ex1l: string;
  ex2: string;
  ex2l: string
  video: string;
  videothumb: string;
}

const AttackingHalfButterfly = () => {

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

// Find the item with the specific id
const targetId = "ahb0";
const targetItem = data.find((item) => item.id === targetId);
// If the item is not found, display a message
if (!targetItem) {
  return <div>Item with ID "{targetId}" not found.</div>;
}
// Create a variable "targetName" that holds the value of item.name
const targetName = targetItem.name;
// Function for creating a todo with the value of targetName as content
function createTodo2() {
  const content = targetName; // Set content to the value of targetName
  client.models.Todo.create({ content });
  // Set a success message for a new todo
  setNotification(`Favorite added: "${content}"`);
  // Clear the notification after 3 seconds
  setTimeout(() => setNotification(""), 3000);
}

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
        </Row>
        <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <h3 className="text-center">{targetItem.sub}:</h3>
              </Row>
              <Row>

                <Col>
                  <video
                    src={targetItem.video}
                    poster={targetItem.videothumb}
                    className="realimg"
                    controls
                    preload="metadata"
                  />
                  <p>Examples in competition:<br />
                    <a href={targetItem.ex1l}>{targetItem.ex1}</a><br />
                    <a href={targetItem.ex2l}>{targetItem.ex2}</a>
                  </p>
                </Col>
                <Col>
                  <Row>
                  <Col xs={12} sm={12} md={9} lg={10}>
                  <h5><strong>{targetItem.name}</strong></h5>
                  <p>{targetItem.description}
                  </p>
                  <a className="btn btn-main-2 btn-round-full btn-success" href={targetItem.b1l}>{targetItem.b1}</a>
                  </Col>
                  <Col xs={12} sm={12} md={3} lg={2}>
                  <Button
                    variant="primary"
                    onClick={() => {
                      createTodo2(); // Always creates "Circling Pass"
                    }}
                  >
                    ⭐ save
                  </Button>
                  </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  
                </Col>
              </Row>
              {/* Buttons to show data */}
              <Row>
                <h4 className="text-center">Choose your opponent's reaction:</h4>
                  
                {data
                  .filter((item) => item.sub === "attackingHalfButterfly")  // Filter items where 'sub' equals "attackingOpenGuard"
                  .map((item) => (
                    <Col xs={6} sm={6} md={3} lg={3} key={item.id}> {/* Ensure 'key' is set to 'item.id' */}
                      <a className="btn btn-main-2 btn-round-full btn-warning" onClick={() => handleButtonClick(item)}>
                        {item.why}
                      </a>
                    </Col>
                  ))}
              </Row>
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
                </Row>
              {/* Dynamically rendered component */}
              <div style={{ marginTop: "20px" }}>
                {activeItem && (
                  <div
                    style={{
                      border: "",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <Col className="square border">
                      <Row>
                        <Col>
                          <video
                            src={activeItem.video}
                            poster={activeItem.videothumb}
                            className="realimg"
                            controls
                            preload="metadata"
                          />
                          <p>Examples in competition:<br />
                          <a href={activeItem.ex1l}>{activeItem.ex1}</a><br />
                          <a href={activeItem.ex2l}>{activeItem.ex2}</a></p> 
                        </Col>
                        <Col>
                            <Row>
                              <Col xs={12} sm={12} md={9} lg={9}>
                                <h5><strong>{activeItem.name}: </strong></h5>
                                <p>{activeItem.description}</p>
                              </Col>
                              <Col xs={12} sm={12} md={3} lg={3}>
                              <Button
                                  variant="primary"
                                  onClick={() => {
                                    if (activeItem) {
                                      createTodo(activeItem.name);
                                    } else {
                                      alert("No active item selected");
                                    }
                                  }}
                                >⭐ save
                                </Button>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <p><a className="btn btn-main-2 btn-round-full btn-success" href={activeItem.b1l}>{activeItem.b1}</a></p>
                              </Col>    
                            </Row>
                        </Col>
                      </Row>  
                    </Col>
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

export default AttackingHalfButterfly;
