import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Container, Row, Col } from "react-bootstrap";

const client = generateClient<Schema>();

function MyList () {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }
 
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  return (
    <Container>
      <Row>
        <Col sm={8}><h4>Learning List: (Click to add or remove)</h4></Col>
        <Col sm={4}><button onClick={createTodo}>+ new</button></Col>
      </Row>
      
      <ul>
        {todos.map((todo) => (
          <li 
            onClick={() => deleteTodo(todo.id)}
            key={todo.id}>
            {todo.content}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default MyList; 