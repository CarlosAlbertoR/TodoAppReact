import React from "react";
import { CompleteIcon } from "../TaskIcon/CompleteIcon";
import { DeleteIcon } from "../TaskIcon/DeleteIcon";
import "./TaskItem.css";

function TaskItem(props) {
  return (
    <li className="task-item">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p
        className={`task-item-p ${props.completed && "task-item-p--complete"}`}
      >
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TaskItem };
