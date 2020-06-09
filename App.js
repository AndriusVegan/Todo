import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Todo from "./Todo";
import db from "./firebase";
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import solid from '@fortawesome/fontawesome-free-solid';
// import faTrash from '@fortawesome/fontawesome-free-brands/faTrash';

// library.add(solid, faTrash);

function App() {
  // function deleteTodo(e) {
  //   e.preventDefault();

  //   let index = e.target.value;

  //   todos.splice(index, 1);

  //   setTodos([...todos]);
  // } this function was just for react, below added from Muizz feedback

  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const [docData, setDocData] = useState([]); //a

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      // added from Muizz feedback to delete data from firebase
      setDocData(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data()} ))
      );
      setTodos(snapshot.docs.map((doc) => doc.data().title));
    });
  }, []);

  const handleSubmit = (e) => { 
    e.preventDefault();

    // setTodos([input, ...todos]); //to bring the list on the top
    db.collection("todos").add({
      title: input,
    });

    // db.collection('todos').doc('addid').delete(); need to add id
    // db.collection("todos").doc('addId').delete();   //added after slack tip 'todoid' doesnt work id is not defined

    setInput("");
  };

  const deleteTodo = (e) => {
    e.preventDefault();
    let index = e.target.value;
    db.collection("todos").doc(docData[index].id).delete();
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
