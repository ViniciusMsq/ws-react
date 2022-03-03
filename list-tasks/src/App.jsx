import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddTask from "./Components/AddTask";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

import "./App.css";
import TaskDetails from "./Components/TaskDetails";

export function App() {
  // const message = "Canal programando o futuro";
  let [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );

      setTasks(data);
    };

    fetchTasks();
  }, []);


  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
      },
    ];

    setTasks(newTask);
  };

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId);

    setTasks(newTasks);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskRemove={handleTaskRemove}
                />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/:taskTitle"
            element={<TaskDetails />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
