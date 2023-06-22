import React, { useState } from "react";
import "./TodoList.css";
function TodoList(props) {
  return (
    <>
      <div className="todo_style">
        <button
          className="delete"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          -
        </button>
        <li> {props.text}</li>
      </div>
    </>
  );
}

export default TodoList;
