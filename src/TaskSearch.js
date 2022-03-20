import React from "react";
import "./TaskSearch.css";

function TaskSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = event => {
    setSearchValue(event.target.value)
  };

  return (
    <input
      className="task-search"
      placeholder="Title"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  )

}

export { TaskSearch };
