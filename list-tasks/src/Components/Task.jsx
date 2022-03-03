import React from "react";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
  const history = useNavigate();

  const handleTaskDetailsClick = () =>{
    history(`/${task.title}`);
  };


  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">

        <button
          className="see-task-details-button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
        
        <button
          className="remove-task-button"
          onClick={() => handleTaskRemove(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>

    // <div className='task-container'>{task.title}</div>
  );
};

export default Task;
