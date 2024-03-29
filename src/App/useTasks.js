import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTasks() {
  const [tasks, saveTasks, loading, error] = useLocalStorage("TASKS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

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

  const addTask = (text) => {
    const newTasks = [...tasks];
    newTasks.push({ completed: false, text });
    saveTasks(newTasks);
  };

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

  return {
    loading,
    error,
    totalTasks,
    completedTasks,
    searchValue,
    setSearchValue,
    searchedTasks,
    addTask,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
  };
}

export { useTasks };
