import React from "react";
import "./TaskCounter.css";

function TaskCounter({ totalTasks, completedTasks }) {
  return (
    <h2 className="task-counter">
      You have completed {completedTasks} of {totalTasks} tasks.
    </h2>
  );
}

export { TaskCounter };
