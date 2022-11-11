import React from "react";
import { TaskCounter } from "../TaskCounter";
import { TaskSearch } from "../TaskSearch";
import { TaskList } from "../TaskList";
import { TaskItem } from "../TaskItem";
import { CreateTaskButton } from "../CreateTaskButton";
import { TaskContext } from "../TaskContext";

function AppUI() {
  const { error, loading, searchedTasks, completeTask, deleteTask } =
    React.useContext(TaskContext);

  return (
    <React.Fragment>
      <TaskCounter />
      <TaskSearch />
      <TaskList>
        {error && <p>We're having an error, try reload...</p>}
        {loading && <p>We're loading, please wait...</p>}
        {!loading && !searchedTasks.length && <p>Add your first task!</p>}

        {searchedTasks.map((task) => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TaskList>

      <CreateTaskButton />
    </React.Fragment>
  );
}

export { AppUI };
