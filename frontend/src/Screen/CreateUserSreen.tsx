import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUser } from "../hooks/createuserHooks";

function CreateUserScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [re_password, setRepassword] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const navigate = useNavigate();

  async function handleCreateUser() {
    const data = await createUser(name, email, password, re_password, gender);
    setName(data);
    if (data) {
      return navigate("/");
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
                  Name:{" "}
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </li>
              <li>
                <pre></pre>
              </li>
              <li>
                <div>
                  Email:{" "}
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
                  Password:{" "}
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
                  Re_password:{" "}
                  <input
                    type="text"
                    name="re_password"
                    id="re_password"
                    placeholder="re_password"
                    value={re_password}
                    onChange={(e) => setRepassword(e.target.value)}
                  />
                </div>
              </li>
              <li>
                <pre></pre>
              </li>
              <li>
                <div>
                  gender:{" "}
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    placeholder="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </li>
              <li>
                <pre></pre>
              </li>
              <li>
                <div>
                  Alreahy have an Account? <Link to="/">SIGN-IN</Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="button">
            <button type="button" id="buttongreen" onClick={handleCreateUser}>
              SIGNUP
            </button>
          </div>
        </div>
      }
    </>
  );
}

export default CreateUserScreen;
