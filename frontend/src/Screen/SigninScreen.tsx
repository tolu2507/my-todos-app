import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createTodo } from "../hooks/createuserHooks";
import { handleClear } from "../hooks/toggleHooks";
import { CREATEUSER } from "../inteface";

function SigninScreen() {
  handleClear();
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
        <div className="sign-action">
          <div className="sign-task-details">
            <div>
              {" "}
              <h1>LOGIN TO YOUR ACCOUNT</h1>
            </div>
            <ul>
              <li>
                <div>{name.name}</div>
              </li>
              <li>
                <div>
                  <h3>Email : </h3>
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
                  <h3>Password : </h3>
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
            <div className="button">
              <button type="button" id="buttongreen" onClick={handleCreateTodo}>
                SIGIN
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default SigninScreen;
