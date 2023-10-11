import React from "react";
import { useState } from "react";

export const FormTask = ({ addTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskName);
    setNewTaskName("");
  };
  return <>
  
    <div className="containerTask">
      <h3>Lista de Tareas</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button>Save task</button>
      </form>
    </div>
  
  </>
  
};
