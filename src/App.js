import React from "react";
import "./App.css";
import { useState } from "react";
import Todo from "./Todo";
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import solid from '@fortawesome/fontawesome-free-solid';
// import faTrash from '@fortawesome/fontawesome-free-brands/faTrash';

// library.add(solid, faTrash);

function App() {
  function deleteTodo(e) {
    e.preventDefault();

    let index = e.target.value;

    todos.splice(index, 1);

    setTodos([...todos]);
  }

  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([input, ...todos]); //to bring the list on the top

    setInput("");
  };
  return (
    <div className="App">
      <h1>MY TO DO APP</h1>
      <form className="todo-form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Add your task here"
        ></input>
        <button
          className="addBtn"
          disabled={!input}
          type="submit"
          onClick={handleSubmit}
        >
          ADD
        </button>

        {todos.map((todo, index) => (
          <Todo
            key={index}
            value={index}
            title={todo}
            deleteTodo={deleteTodo}
          />
        ))}
      </form>
    </div>
  );
}

export default App;
