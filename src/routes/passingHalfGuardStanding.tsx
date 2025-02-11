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

const passingHalfGuardStanding = () => {

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

  // Function for creating a todo with a fixed content value
function createTodo2() {
  const content = "Shoulder Push Foot Lift"; // Set content explicitly
  
  client.models.Todo.create({ content });

  // Set a success message for a new todo
  setNotification(`Favorite added: "${content}"`);

  // Clear the notification after 3 seconds
  setTimeout(() => setNotification(null), 3000);
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
    
    
        <Col>
          <Card>
            <Card.Body>
            <Row>
            <h3 className="text-center">Passing Half-Guard (Standing):</h3>
            </Row>
              <Row>
                <Col>
                    <video 
                      src="https://real-grappling-bucket.s3.us-east-1.amazonaws.com/IMG_5051+4.mov"
                      poster="https://real-grappling-bucket.s3.us-east-1.amazonaws.com/IMG_5051+4.png"
                      className="realimg" 
                      controls
                      preload="metadata"
                    />
                </Col>
                <Col>
                <h5><strong>Knee Cut (near side):</strong></h5>
                   <p>Underhook, Knee Cut through on the nearside.
                   </p>
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
              <Row>
                   
                <Col>
                <p>Examples in competition:<br />
                <a href="https://www.youtube.com/watch?v=xnMtsEidnsQ">x (00.05)</a><br />       
                <a href="https://www.youtube.com/watch?v=5fVQKJ12iHw&t=227s">x (00:30)</a></p>       
                </Col>

              </Row>

              {/* Buttons to show data */}
              <Row>
              <h4 className="text-center">Choose your opponent's reaction:</h4>
              {data
              .filter((item) => item.sub === "passingHalfGuardStanding")  // Filter items where 'sub' equals "attackingOpenGuard"
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
                    <Col>

                   <Container>
                     <Row>
                     <Col xs={12} sm={12} md={9} lg={9}>
                     <h5><strong>{activeItem.name}: </strong></h5>
                      </Col>
                      <Col xs={12} sm={12} md={3} lg={3}>
                      
                      
                      </Col>
                      </Row>
                      <Row>
                        <Col>
                        <p>{activeItem.description}</p>
                        
                        </Col>
                        
                      </Row>
                                          {/* Buttons to show data */}
              <Row>
                <Col>
                   <p><a className="btn btn-main-2 btn-round-full btn-success" href={activeItem.b1l}>{activeItem.b1}</a></p>
                </Col>
              </Row>

                   
                  </Container>
                   </Col>

                   </Row>
                <Row>
                  <p>Examples in competition:<br />
                  <a href={activeItem.ex1l}>{activeItem.ex1}</a><br />
                  <a href={activeItem.ex2l}>{activeItem.ex2}</a></p> 
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

export default passingHalfGuardStanding;
