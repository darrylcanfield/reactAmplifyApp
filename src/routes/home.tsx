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
        <Col sm={8}>
          <h4>Learning List: (Click to add or remove)</h4>
        </Col>
        
        {/* Step 3: Input field for entering todo content */}
        <Col sm={4}>
          <input
            type="text"
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value)} // Update state on input change
            placeholder="Enter transition"
          />
          <button onClick={createTodo}>+ New Todo</button>
        </Col>
      </Row>

      <ul>
        {todos.map((todo) => (
          <li onClick={() => deleteTodo(todo.id)} key={todo.id}>
            {todo.content}
          </li>
        ))}
      </ul>
    </Container>

    
  );
}

export default MyList;
