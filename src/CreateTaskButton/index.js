import React from "react";
import "./CreateTaskButton.css";

function CreateTaskButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="create-task-button" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTaskButton };
