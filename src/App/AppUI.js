import React from "react";
import { TaskCounter } from "../TaskCounter";
import { TaskSearch } from "../TaskSearch";
import { TaskList } from "../TaskList";
import { TaskItem } from "../TaskItem";
import { CreateTaskButton } from "../CreateTaskButton";

function AppUI({
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