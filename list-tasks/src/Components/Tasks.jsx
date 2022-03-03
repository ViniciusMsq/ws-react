import React from "react";
import Task from "./Task";

export default function Tasks({ tasks, handleTaskClick, handleTaskRemove }) {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskRemove={handleTaskRemove}
        />
      ))}
    </>
  );
}
