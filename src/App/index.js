import React from "react";
import { TaskCounter } from "../TaskCounter";
import { TaskSearch } from "../TaskSearch";
import { TaskList } from "../TaskList";
import { TaskItem } from "../TaskItem";
import { CreateTaskButton } from "../CreateTaskButton";
import { useTasks } from "./useTasks";
import { Modal } from "../Modal";
import { TaskForm } from "../TaskForm";
import { TasksError } from "../TasksError";
import { TasksLoading } from "../TasksLoading";
import { EmptyTasks } from "../EmptyTasks";
import { TaskHeader } from "../TaskHeader";

function App() {
  const {
    error,
    loading,
    searchedTasks,
    completeTask,
    deleteTask,
    openModal,
    addTask,
    setOpenModal,
    totalTasks,
    completedTasks,
    searchValue,
    setSearchValue,
  } = useTasks;

  return (
    <React.Fragment>
      <TaskHeader>
        <TaskCounter totalTasks={totalTasks} completedTasks={completedTasks} />
        <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TaskHeader>

      <TaskList>
        {error && <TasksError />}
        {loading && <TasksLoading />}
        {!loading && !searchedTasks.length && <EmptyTasks />}

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

      {!!openModal && (
        <Modal>
          <TaskForm addTask={addTask} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTaskButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
