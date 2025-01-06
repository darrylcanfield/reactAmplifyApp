import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Link, Route, Routes } from "react-router";
import Huge from "./routes/huge.tsx";
import About from "./routes/about.tsx";
import Home from "./routes/home.tsx";

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
      <h1>Real Grappling</h1>
      <nav>
        <h1>links: load</h1>
        <a href="/">Home</a>
        <a href="/huge">Huge</a>
        <a href="/about">About</a>  
      </nav>
      <nav>
      <h1>routes: no load</h1>
        <Link to="/">Home</Link>
        <Link to ="/huge">Huge</Link>
        <Link to="/about">About</Link>  
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/huge' element={<Huge />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <h3>To Dants</h3>
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
      <h3>Sign in/out:</h3>
        <button onClick={signOut}>Sign out</button>
      </div>
    </main>
  );
}

export default App;
