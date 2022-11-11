import React from "react";
import { TaskContext } from "../TaskContext";
import "./TaskCounter.css";

function TaskCounter() {
  const { totalTasks, completedTasks } = React.useContext(TaskContext);

  return (
    <h2 className="task-counter">
      You have completed {completedTasks} of {totalTasks} tasks.
    </h2>
  );
}

export { TaskCounter };
