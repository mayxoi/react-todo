import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Todo = ({ todo, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
      <button className="complete" onClick={() => completeTodo(todo.id)}>
          <i class="bi bi-check2-all"></i>
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
