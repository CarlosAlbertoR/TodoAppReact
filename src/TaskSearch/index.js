import React from "react";
import { TaskContext } from "../TaskContext";
import "./TaskSearch.css";

function TaskSearch() {
  const { searchValue, setSearchValue } = React.useContext(TaskContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="task-search"
      placeholder="Task name"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TaskSearch };
