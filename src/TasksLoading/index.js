import React from "react";
import "./TasksLoading.css";

function TasksLoading() {
  return (
    <div className="loadingTask-container">
      <span className="loadingTask-completeIcon"></span>
      <p className="loadingTask-text">Loading Tasks...</p>
      <span className="loadingTask-deleteIcon"></span>
    </div>
  );
}

export { TasksLoading };
