import React from "react";
import "../style.css";

function ToDoList(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#4D7607",
    textDecoration: "line-through"
  };
  return (
    <div className="check">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <h3 style={props.item.completed ? completedStyle : null}>
        {props.item.task}
      </h3>
    </div>
  );
}

export default ToDoList;
