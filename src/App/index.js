import React from "react";
import { AppUI } from "./AppUI";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItems;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = initialValue;
  } else {
    parsedItems = JSON.parse(localStorage.getItem(itemName));
  }

  const [items, setItem] = React.useState(parsedItems);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  return [items, saveItem];
}

function App() {
  const [tasks, saveTasks] = useLocalStorage('TASKS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const completedTasks = tasks.filter(task => !!task.completed).length;
  const totalTasks = tasks.length;
  let searchedTasks = [];

  if (!searchValue.length >= 1) {
    searchedTasks = tasks
  } else {
    searchedTasks = tasks.filter(task => {
      const taskText = task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return taskText.includes(searchText);
    })
  }

  const completeTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = true;
    saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  return (
    <AppUI
      totalTasks={totalTasks}
      completedTasks={completedTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTasks={searchedTasks}
      completeTask={completeTask}
      deleteTask={deleteTask}
    />
  );
}

export default App;
