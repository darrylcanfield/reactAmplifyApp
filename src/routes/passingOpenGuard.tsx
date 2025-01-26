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

const PassingOpenGuard = () => {
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
            <h3>Passing Open Guard:</h3>
            </Row>
              <Row>
                <Col>
                    <video 
                      src="https://real-grappling-bucket.s3.us-east-1.amazonaws.com/IMG_5051+2.mov"
                      poster="https://real-grappling-bucket.s3.us-east-1.amazonaws.com/IMG_5051+2.png"
                      className="realimg" 
                      controls
                      preload="metadata"
                    />
                </Col>
                <Col>
                   <p><strong>Cross side knee cut:</strong> Getting the instep, keeping the underhook, knee cutting through.</p>
                </Col>
              </Row>
              <Row>
                   <h5>Examples in competition:</h5>
                <Col className="square border">
                <p><a href="https://www.youtube.com/watch?v=8UtCiFqwBfQ">Dan Manasoiu vs Damon Ramos | 2023 ADCC East Coast Trials (2:13)</a></p>       
                </Col>
                <Col className="square border">
                <p><a href="https://www.youtube.com/watch?v=8UtCiFqwBfQ">Dan Manasoiu vs Damon Ramos | 2023 ADCC East Coast Trials (2:13)</a></p>       
                </Col>

              </Row>

              {/* Buttons to show data */}
              <Row>
              <h5>Choose Your opponent's reaction:</h5>
              {data
              .filter((item) => item.sub === "passingHalfGuard")  // Filter items where 'sub' equals "attackingOpenGuard"
              .map((item) => (
                <Col key={item.id}> {/* Ensure 'key' is set to 'item.id' */}
                  <a className="btn btn-main-2 btn-round-full btn-warning" onClick={() => handleButtonClick(item)}>
                    {item.why}
                  </a>
                </Col>
              ))}
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
                  <Row>
                    <Col>
                    <video 
                      src={activeItem.video}
                      poster={activeItem.videothumb}
                      className="realimg" 
                      controls
                      preload="metadata"
                    />
                    </Col>
                    <Col>

                   <Container>
                     <Row>
                     <Col xs={12} sm={12} md={9} lg={9}>
                      <h5>{activeItem.name}: </h5>
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
                        {activeItem.description}
                        </Col>
                      </Row>

                   
                  </Container>
                   </Col>

                   </Row>
                <Row>
                  <h5>Examples in competition:</h5>
                <Col className="square border">
                      <p><a href={activeItem.ex1l}>{activeItem.ex1}</a></p> 
                </Col>
                <Col className="square border">
                      <p><a href={activeItem.ex2l}>{activeItem.ex2}</a></p> 
                </Col>
              </Row>
                   
                  
                  

                    {/* Buttons to show data */}
              <Row>
              <h5>Choose Your opponent's reaction:</h5>
                <Col>
                   <p><a className="btn btn-main-2 btn-round-full btn-warning" href={activeItem.b1l}>{activeItem.b1}</a></p>
                </Col>
                <Col>
                <p><a className="btn btn-main-2 btn-round-full btn-warning" href={activeItem.b2l}>{activeItem.b2}</a></p>
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

export default PassingOpenGuard;
