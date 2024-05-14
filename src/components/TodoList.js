import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="list-group my-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span className={task.completed ? "completed" : ""}>{task.title}</span>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="btn btn-danger"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
