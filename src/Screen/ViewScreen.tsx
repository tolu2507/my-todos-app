import axios from "axios";
import React, { useEffect, useState } from "react";
import { TASKS } from "../inteface";

function ViewScreen() {
  const [filteredTask, setFilteredTask] = useState([]);

  useEffect(() => {
    const loadTask = async () => {
      const { data } = await axios.get("http://127.0.0.1:3001/api/v1/home");
      const filter = data.filter((task: TASKS) => task.isDone === true);
      setFilteredTask(filter);
    };
    loadTask();
  }, []);

  return (
    <>
      {filteredTask.map((task: TASKS) => {
        return (
          <div key={task._id} className="task">
            <div className="task-image">
              {task.isDone ? (
                <img
                  src="./images/todo-image.jpg"
                  alt="todo"
                  style={{
                    width: "15rem",
                    height: "15rem",
                    borderRadius: "100%",
                  }}
                />
              ) : (
                <img
                  src="./images/redx.jpg"
                  alt="todo"
                  style={{
                    width: "15rem",
                    height: "15rem",
                    borderRadius: "100%",
                  }}
                />
              )}
            </div>
            <div className="action">
              <div className="task-details">
                <ul>
                  <li>
                    <div>Task: {task.task}</div>
                  </li>
                  <li>
                    <div>Start: {task.time_stated}</div>
                  </li>
                  <li>
                    <div>End: {task.time_finished}</div>
                  </li>
                </ul>
              </div>
              <div className="button">
                <button type="button" id="buttongrey">
                  EDIT
                </button>
                <button type="button" id="buttonred">
                  DELETE
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ViewScreen;
