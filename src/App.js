import React from "react";
import { TaskCounter } from "./TaskCounter";
import { TaskSearch } from "./TaskSearch";
import { TaskList } from "./TaskList";
import { TaskItem } from "./TaskItem";
import { CreateTaskButton } from "./CreateTaskButton";
//import './App.css';

const tasks = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: false },
];
function App() {
  return (
    <React.Fragment>
      <TaskCounter />

      <TaskSearch />
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.text} text={task.text} />
        ))}
      </TaskList>
      <CreateTaskButton />
    </React.Fragment>
  );
}

export default App;
