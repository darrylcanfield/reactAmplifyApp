import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Link, Route, Routes } from "react-router";
import Huge from "./routes/huge";
import About from "./routes/about";
import Home from "./routes/home";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const { signOut } = useAuthenticator();

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
    <main>
      <nav>
        <h1>normal routes</h1>
        <a href="/">Home</a>
        <a href="/huge">Huge</a>
        <a href="/about">About</a>  
      </nav>
      <nav>
      <h1>link routes</h1>
        <Link to="/">Home</Link>
        <Link to ="/huge">Huge</Link>
        <Link to="/about">About</Link>  
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/huge' element={<Huge />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li 
            onClick={() => deleteTodo(todo.id)}
            key={todo.id}>
            {todo.content}
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
