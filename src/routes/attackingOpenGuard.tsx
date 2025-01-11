import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import data from "../data.json"; // Import the JSON file
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const client = generateClient<Schema>();

// Define the type for items in the data array
interface DataItem {
  id: string;
  why: string;
  name: string;
  description: string;
}

const AttackingOpenGuard = () => {
  const [activeItem, setActiveItem] = useState<DataItem | null>(null); // State for the active item
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  // Function for creating a todo with activeItem.name
  function createTodo(content: string) {
    client.models.Todo.create({ content });
  }

  // Handle button click to set the active item
  const handleButtonClick = (item: DataItem) => {
    setActiveItem(item);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/Q_WjpBd_Yz8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDjCwWPPylEfmaS7PMJpHdibbaksg" />
            <Card.Body>
              <Card.Title>Attacking From Half Guard</Card.Title>
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
                  <div>
                    <h2>{activeItem.name}</h2>
                    <p>{activeItem.description}</p>
                    <Col sm={4}>
                        <Button
                          variant="primary"
                          onClick={() => {
                            if (activeItem) {
                              createTodo(activeItem.name);
                            } else {
                              alert("No active item selected");
                            }
                          }}
                        >
                          *Favorite
                        </Button>
                      </Col>

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

export default AttackingOpenGuard;
