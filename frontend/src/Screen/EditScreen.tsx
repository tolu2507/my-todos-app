import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UPDATETASKS } from "../inteface";

function EditScreen() {
  const [tasks, setTask] = useState({
    _id: "",
    task: "",
    time_stated: "",
    time_finished: "",
    isDone: false,
    comment:""
  });
  const [task, setTasks] = useState("");
  const [time, setTime] = useState("");
  const [endTime, setEndtime] = useState("");
  const [done, setDone] = useState(false);
  const [comment, setComments] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  async function update() {
    const update: UPDATETASKS = {
      task: task,
      time_stated: time,
      time_finished: endTime,
      isDone: done,
      comment:comment
    }
    console.log(update);
    

    const { data } = await axios.put("http://127.0.0.1:3001/api/v1/todo/update/" + id, update);
    
    if (data) {
      alert("successfully updated")
      navigate('/home')
    }

  }

  useEffect(() => {
    const loadTask = async (id: string | undefined) => {
      const { data } = await axios.get(
        "http://127.0.0.1:3001/api/v1/todo/home/" + id
      );
      setTask(data);
    };
    function setState() {
      setTasks(tasks.task);
      setTime(tasks.time_stated);
      setEndtime(tasks.time_finished);
      setDone(tasks.isDone);
      setComments(tasks.comment)
    }
    loadTask(id);
    setState()
  }, [id, tasks.comment, tasks.isDone, tasks.task, tasks.time_finished, tasks.time_stated]);


  return (
    <>
      {
        <div key={tasks._id}>
          <div className="task-image">
            {tasks.isDone ? (
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
                    onChange={()=>setDone(!done)}
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
              <button type="button" id="buttongreen" onClick={update}>
                UPDATE
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default EditScreen;
