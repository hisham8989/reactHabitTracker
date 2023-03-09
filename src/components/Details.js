import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../feature/task/taskSlice";
import "./Details.css";

const Details = () => {
  const tasks = useSelector((state) => state.tasks);
  // console.log(tasks);
  const dispatch = useDispatch();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "2-digit",
  };
  const formattedDate = today.toLocaleString("en-In", options);

  const handleStatusChange = (data) => {
    dispatch(updateTask(data));
  };

  if (!tasks.length)
    return (
      <div className="details-table-container">
        <h2 style={{ textAlign: "center" }}>Weekly Updates</h2>
        <h3 style={{ padding: "10px" }}>Today : {formattedDate}</h3>
        <p style={{ textAlign: "center" }}>No Habit Available</p>
      </div>
    );

  return (
    <div className="details-table-container">
      <h2 style={{ textAlign: "center" }}>Weekly Updates</h2>
      <h3 style={{ padding: "10px" }}>Today : {formattedDate}</h3>
      {tasks.map((task, i) => (
        <table key={`task-${i}`} className="details-table">
          <tbody>
            <tr>
              <th colSpan="7">{task.name}</th>
            </tr>
            <tr>
              {weekDays.map((day, index) => (
                <th key={`day-${index}`}>{day}</th>
              ))}
            </tr>
            <tr>
              {weekDays.map((day, index) => (
                <td key={`day-option-${index}`}>
                  <select
                    name={day.toLowerCase()}
                    onChange={(e) => {
                      const data = {
                        taskId: task.id,
                        day: {
                          name: e.target.name,
                          status: e.target.value,
                        },
                      };
                      handleStatusChange(data);
                    }}
                    defaultValue={
                      task?.days?.find(({ name }) => name === day.toLowerCase())
                        ?.status || "none"
                    }
                    className={
                      task?.days?.find(({ name }) => name === day.toLowerCase())
                        ?.status || "none"
                    }
                  >
                    <option value="none">None</option>
                    <option value="done">Done</option>
                    <option value="notDone">Not Done</option>
                  </select>
                </td>
              ))}
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      ))}
    </div>
  );
};

export default Details;
