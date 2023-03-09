import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../feature/task/taskSlice";
import "./TaskList.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  if (!tasks.length) return <div>No Task Available</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>S No.</th>
          <th>Task Name</th>
          <th>Task Description</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={`list-${index}`}>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td>{task.description ?? "-"}</td>
            <td>
              <button
                className="clear-button"
                value={task.id}
                onClick={(e) => dispatch(removeTask(+e.target.value))}
              >
                clear
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default TaskList;
