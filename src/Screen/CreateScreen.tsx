import axios from "axios";
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { UPDATETASKS } from "../inteface";

function CreateScreen() {
  const [task, setTasks] = useState("");
  const [time, setTime] = useState("");
  const [endTime, setEndtime] = useState("");
  const [done, setDone] = useState(false);
  const [comment, setComments] = useState("");
  const navigate = useNavigate();


  async function createTodo() {
    const create: UPDATETASKS = {
      task: task,
      time_stated: time,
      time_finished: endTime,
      isDone: done,
      comment: comment,
    };
    console.log(create);

    const { data } = await axios.post(
      "http://127.0.0.1:3001/api/v1/todos",
      create
    );

    if (data) {
      alert("successfully created todo");
      navigate("/");
    }
  }

  return (
    <>
      {
        <div className="action">
          <div className="task-details">
            <ul>
              <li>
                <div>
                  Task:{" "}
                  <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="task"
                    value={task}
                    onChange={(e) => setTasks(e.target.value)}
                  />
                </div>
              </li>
              <li>
                <div>
                  Start:{" "}
                  <input
                    type="text"
                    name="starttime"
                    id="starttime"
                    placeholder="starttime"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </li>
              <li>
                <div>
                  End:{" "}
                  <input
                    type="text"
                    name="endtime"
                    id="endtime"
                    placeholder="endtime"
                    value={endTime}
                    onChange={(e) => setEndtime(e.target.value)}
                  />
                </div>
              </li>
              <li>
                Done:{" "}
                <input
                  type="checkbox"
                  name="done"
                  id="done"
                  placeholder="check"
                  checked={done}
                  onChange={() => setDone(!done)}
                />
              </li>
              <li>
                Comments:{" "}
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="comment"
                  value={comment}
                  onChange={(e) => setComments(e.target.value)}
                />
              </li>
            </ul>
          </div>
          <div className="button">
            <button type="button" id="buttongreen" onClick={createTodo}>
              CREATE
            </button>
          </div>
        </div>
      }
    </>
  );
}

export default CreateScreen;
