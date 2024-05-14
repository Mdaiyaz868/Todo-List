import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title.trim() !== "") {
      dispatch(addTask({ title, completed: false }));
      setTitle("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="card card-body">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={handleKeyPress}
          className="form-control text-capitalize"
          placeholder="add todo item"
        />
      </div>
      <button onClick={handleAddTask} className="btn btn-primary mt-2">
        Add
      </button>
    </div>
  );
};

export default TaskInput;
