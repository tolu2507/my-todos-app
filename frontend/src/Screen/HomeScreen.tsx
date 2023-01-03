import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TASKS } from "../inteface";

function HomeScreen() {
  const [tasks, setTask] = useState([]);
  const navigate = useNavigate();

  function edit(id: string) {
    navigate("/edit/" + id);
  }

  async function del(id: string) {
    await axios.delete("http://127.0.0.1:3001/api/v1/todo/delete/" + id);
    return navigate("/deleted");
  }

  useEffect(() => {
    const loadTask = async () => {
      const { data } = await axios.get(
        "http://127.0.0.1:3001/api/v1/todo/home"
      );
      setTask(data);
    };
    loadTask();
  }, []);

  return (
    <>
      {tasks.map((task: TASKS) => {
        return (
          <div key={task._id} className="task">
            <div className="task-image">
              {task.isDone ? (
                <img
                  src="../images/todo-image.jpg"
                  alt="todo"
                  style={{
                    width: "15rem",
                    height: "15rem",
                    borderRadius: "100%",
                  }}
                />
              ) : (
                <img
                  src="../images/redx.jpg"
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
                  <li>
                    Done:{" "}
                    <input
                      type="checkbox"
                      name="done"
                      id="done"
                      placeholder="check"
                      checked={task.isDone}
                      readOnly
                    />
                  </li>
                </ul>
              </div>
              <div className="button">
                <button
                  type="button"
                  id="buttongrey"
                  onClick={() => edit(task._id)}
                >
                  EDIT
                </button>
                <button
                  type="button"
                  id="buttonred"
                  onClick={() => del(task._id)}
                >
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

export default HomeScreen;
