import React from "react";

const Todo = function({ todo, index, completeTodo }) {
  return <div className="todo">{todo.text}</div>;
};

export default Todo;
