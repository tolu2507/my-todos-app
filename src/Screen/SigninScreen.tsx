import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createTodo } from "../hooks/createuserHooks";
import { CREATEUSER } from "../inteface";

function SigninScreen() {
  let details: CREATEUSER = {
    name: "",
    email: "",
    password: "",
    re_password: "",
    isAdmin: false,
    gender: "",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(details);
  const navigate = useNavigate();

  async function handleCreateTodo() {
    const data = await createTodo(email, password);
    setName(data);
    if (data) {
      return navigate("/home");
    }
  }
  return (
    <>
      {
        <div className="action">
          <div className="task-details">
            <ul>
              <li>
                <div>{name.name}</div>
              </li>
              <li>
                <div>
                  Task:{" "}
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </li>
              <li>
                <pre></pre>
              </li>
              <li>
                <div>
                  Start:{" "}
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </li>
              <li>
                <pre></pre>
              </li>
              <li>
                <div>
                  Dont have an Account <Link to="/createuser">SIGN-UP</Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="button">
            <button type="button" id="buttongreen" onClick={handleCreateTodo}>
              SIGIN
            </button>
          </div>
        </div>
      }
    </>
  );
}

export default SigninScreen;
