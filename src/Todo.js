import React from "react";
import "./Todo.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import FlipMove from 'react-flip-move';

function Todo(props) {
    return (
        <div className="todo">
            <h2>{props.title}</h2>
            <button
                className="deleteBtn"
                value={props.value}
                onClick={props.deleteTodo}
            >
                DELETE
            </button>
        </div>
    );
};

export default Todo;
