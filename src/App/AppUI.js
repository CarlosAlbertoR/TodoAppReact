import React from "react";
import { TaskCounter } from "../TaskCounter";
import { TaskSearch } from "../TaskSearch";
import { TaskList } from "../TaskList";
import { TaskItem } from "../TaskItem";
import { CreateTaskButton } from "../CreateTaskButton";

function AppUI({
    loading,
    error,
    totalTasks,
    completedTasks,
    searchValue,
    setSearchValue,
    searchedTasks,
    completeTask,
    deleteTask
}) {
    return (
        <React.Fragment>
            <TaskCounter total={totalTasks} completed={completedTasks} />
            <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TaskList>
                {error && <p>We're having an error, try reload...</p>}
                {loading && <p>We're loading, please wait...</p>}
                {(!loading && !searchedTasks.length) && <p>Add your first task!</p>}

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

export { AppUI }