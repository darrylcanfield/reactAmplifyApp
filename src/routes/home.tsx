import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Container, Row, Col } from "react-bootstrap";

const client = generateClient<Schema>();

function MyList() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [todoContent, setTodoContent] = useState<string>("");  // Step 1: State for new todo content

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  // Step 2: Create a todo using the state value (content)
  function createTodo() {
    if (todoContent.trim() === "") {
      alert("Please enter a todo content");
      return;
    }
    client.models.Todo.create({ content: todoContent });

    // Optionally clear the input field after adding the todo
    setTodoContent("");
  }

  // Function for deleting a todo
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  return (
    <Container fluid>
      <Row>
        <div>  
          <Container fluid className="text-center">
            <h4> </h4>
            <h4>Grappling that works,</h4>
            <h4>And how to do it.</h4>
          </Container>
      </div>
      </Row>
    </Container>

    
  );
}

export default MyList;
