import "./App.css";
import React, { useState } from "react";
import Todo from "./components/Todo";
import FormTodo from "./components/FormTodo";
import Search from "./components/Search";
import Filter from "./components/Filter";
/* O useState é o gancho que usamos para manter e atualizar o estado de um componente. */

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.floor(Math.random() * 10000),
      text: "Teste",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("A-Z");

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        <FormTodo addTodo={addTodo} />
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "A-Z"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
    </div>
  );
}

export default App;

/* Estrutura básica do componente To-Do List:

import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
    </div>
  );
}

export default App;

*/

/* 
import "./App.css";
import React, { useState } from "react";
O useState é o gancho que usamos para manter e atualizar o estado de um componente.

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar",
      category: "Trampo",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Editar",
      category: "Tarefa",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Apagar",
      category: "Edit",
      isCompleted: true,
    },
  ]);

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <p>{todo.text}</p>
        ))}
        <button type="submit">Adicionar</button>
      </div>
    </div>
  );
}
*/
