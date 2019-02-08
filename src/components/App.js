import React, { useState, Fragment } from "react";

import TodoForm from "./TodoForm.js";

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about react" },
    { text: "Learn about javascript" },
    { text: "Learn about ht" }
  ]);

  return (
    <>
      <h1>Todo-list</h1>
      <TodoForm />
    </>
  );
}

export default App;
