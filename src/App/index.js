import React from "react";
import { AppUI } from "./AppUI";

const defaultTasks = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: false },
];

function App() {
  const [tasks, setTasks] = React.useState(defaultTasks);
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
    setTasks(newTasks);
  };

  const deleteTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
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
