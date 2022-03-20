import React from "react";
import "./TaskCounter.css";

function TaskCounter({ total, completed }) {
  return (
    <h2 className="task-counter"> You have completed {completed} of {total} tasks.</h2>
  );
}

export { TaskCounter };
