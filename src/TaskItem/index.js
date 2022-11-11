import React from "react";
import "./TaskItem.css";

function TaskItem(props) {
  return (
    <li className="task-item">
      <span
        className={`icon icon-check ${props.completed && "icon-check--active"}`}
        onClick={props.onComplete}
      >
        ✔
      </span>
      <p
        className={`task-item-p ${props.completed && "task-item-p--complete"}`}
      >
        {props.text}
      </p>
      <span className="icon icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TaskItem };
