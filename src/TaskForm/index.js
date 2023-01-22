import React from "react";
import "./TaskForm.css";

function TaskForm({ addTask, setOpenModal }) {
  const [newTaskValue, setNewTaskValue] = React.useState("");

  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTaskValue.length <= 0) return;
    addTask(newTaskValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>What tasks do you have pending?</label>
      <textarea
        placeholder="📝Write it here!"
        value={newTaskValue}
        onChange={onChange}
      />
      <div className="TaskForm-buttonContainer">
        <button
          type="button"
          className="TaskForm-button TaskForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TaskForm-button TaskForm-button--add">
          Add task
        </button>
      </div>
    </form>
  );
}

export { TaskForm };
