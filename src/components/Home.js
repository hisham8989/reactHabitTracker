import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../feature/task/taskSlice";
import TaskList from "./TaskList";

const Home = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...task };
    if (newTask.description === "") delete newTask.description;
    dispatch(addTask(newTask));
    setTask({ name: "", description: "" });
  };

  return (
    <div className="home">
      <div className="list-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="name">Task Name</label>
          <input
            type="text"
            id="name"
            placeholder="task..."
            value={task.name}
            name="name"
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="(optional)"
            rows={4}
            cols={40}
            value={task.description}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="customDisabled submit-button"
            disabled={task.name === ""}
          >
            Add Task
          </button>
        </form>
        <div style={{ padding: "40px 0 0 0" }}>
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Home;
