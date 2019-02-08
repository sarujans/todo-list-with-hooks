import React, { useState, Fragment } from "react";

import Todo from "./Todo.js";
import TodoForm from "./TodoForm.js";

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about react" },
    { text: "Learn about javascript" },
    { text: "Learn about ht" }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <>
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} />
          ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </>
  );
}

export default App;
