import React, { useState, Fragment } from "react";

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about react" },
    { text: "Learn about javascript" },
    { text: "Learn about ht" }
  ]);

  return (
    <>
      <h1>Todo-list</h1>
    </>
  );
}

export default App;
