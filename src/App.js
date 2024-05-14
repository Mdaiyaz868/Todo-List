import React from "react";
import TaskInput from "./components/TodoInput"; // Change import path
import TaskList from "./components/TodoList"; // Change import path
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="text-uppercase text-center my-4">Todo App</h1>
      <div className="row">
        <div className="col-8 col-md-6 mx-auto mt-2">
          <TaskInput />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
