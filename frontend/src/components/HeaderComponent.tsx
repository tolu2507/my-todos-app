import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadDb } from "../hooks/localStorageHook";
import {
  handleClear,
  handleCloseToggle,
  handleToggle,
} from "../hooks/toggleHooks";
import { CREATEUSER } from "../inteface";

function Header() {
  const [user, setName]: any = useState([]);

  useEffect(() => {
    const db = loadDb();
    return setName(db);
  }, [user]);

  return (
    <header className="App-header">
      <div
        style={{
          fontSize: "Larger",
          height: "5rem",
          color:"royalblue"
        }}
      >
        <p>
          <h1>
            <img
              src="../todo-icon.jpeg"
              alt="logo"
              style={{ width: "2rem", height: "2rem" }}
            />
            TODO-LIST
          </h1>
        </p>
      </div>
      {user.map((it: CREATEUSER) => {
        return (
          <div className="App-header-item">
            <ul className="App-header-item">
              <li>{it.name}</li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/doc">doc</Link>
              </li>
              <li>
                <p onClick={handleToggle} id="hidden">
                  <img
                    src={
                      it.gender === "male"
                        ? "../images/male.png"
                        : "../images/female.png"
                    }
                    alt="profile"
                    style={{
                      width: "5rem",
                      height: "5rem",
                      borderRadius: "100%",
                    }}
                  />
                </p>
                <div className="hidden" id="block">
                  <div className="nothidden">
                    <div>
                      <div>
                        <Link to="/feedback&enquiries"> share</Link>
                      </div>
                      <div>
                        <pre></pre>
                      </div>
                      <div>
                        <pre>*</pre>
                      </div>
                      <div onClick={handleClear}>
                        <Link to="/">Logout</Link>
                      </div>
                    </div>
                    <button
                      type="button"
                      id="btn-smallx"
                      onClick={handleCloseToggle}
                    >
                      x
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <div className="App-input">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search"
                onChange={(e) => "null"}
              />
            </div>
          </div>
        );
      })}
    </header>
  );
}

export default Header;
