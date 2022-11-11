import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TaskContext = React.createContext();

function TaskProvider(props) {
  const [tasks, saveTasks, loading, error] = useLocalStorage("TASKS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTasks = tasks.filter((task) => !!task.completed).length;
  const totalTasks = tasks.length;

  let searchedTasks = [];

  if (!searchValue.length >= 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter((task) => {
      const taskText = task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return taskText.includes(searchText);
    });
  }

  const completeTask = (text) => {
    const taskIndex = tasks.findIndex((task) => task.text === text);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = true;
    saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const taskIndex = tasks.findIndex((task) => task.text === text);
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        loading,
        error,
        totalTasks,
        completedTasks,
        searchValue,
        setSearchValue,
        searchedTasks,
        completeTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };