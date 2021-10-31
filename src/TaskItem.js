import React from "react";
import "./TaskItem.css";

function TaskItem(props) {
  return (
    <li className="task-item">
      <span
        className={`icon icon-check ${props.completed && "icon-check--active"}`}
      >
        √
      </span>
      <p
        className={`task-item-p ${props.completed && "task-item-p--complete"}`}
      >
        {props.text}
      </p>
      <span className="icon icon-delete">X</span>
    </li>
  );
}

export { TaskItem };
