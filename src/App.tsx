import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { clearDb, loadDb } from "./hooks/localStorageHook";
import { CREATEUSER } from "./inteface";

import CreateScreen from "./Screen/CreateScreen";
import CreateUserScreen from "./Screen/CreateUserSreen";
import { DeleteScreen } from "./Screen/DeletedScreen";
import EditScreen from "./Screen/EditScreen";
import HomeScreen from "./Screen/HomeScreen";
import SigninScreen from "./Screen/SigninScreen";
import UndoneScreen from "./Screen/UndoneScreen";
import ViewScreen from "./Screen/ViewScreen";

function App() {
  const [user, setName]: any = useState([]);
  // const navigate = useNavigate();

  function handleToggle() {
    const div = document.querySelector<HTMLDivElement>("#block");
    if (div !== null && div !== undefined) {
      div.style.display = "block";
    }
  }

  function handleCloseToggle() {
    const div = document.querySelector<HTMLDivElement>("#block");
    if (div !== null && div !== undefined) {
      div.style.display = "none";
    }
  }

  function handleClear() {
    clearDb()
    // return navigate('/')
  }

  useEffect(() => {
    const db = loadDb();
    return setName(db);
  }, [user]);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>TODO-LIST</div>
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
                            <Link to="/share"> share</Link>
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
        <aside className="App-aside">
          {user.map((it: CREATEUSER) => {
            return (
              <ul>
                <li>
                  <Link to="/home">About Todo</Link>
                </li>
                <li>
                  <Link to="/create">Create Todo</Link>
                </li>
                <li>
                  <Link to="/checked">View Done Todo</Link>
                </li>
                <li>
                  <Link to="/unchecked">View Undone Todo</Link>
                </li>
                <li>
                  <Link to="/feedback&enquiries">Feedback and Enquiries</Link>
                </li>
              </ul>
            );
          })}
        </aside>
        <main className="App-body">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/" element={<SigninScreen />} />
            <Route path="/deleted" element={<DeleteScreen />} />
            <Route path="/create" element={<CreateScreen />} />
            <Route path="/createuser" element={<CreateUserScreen />} />
            <Route path="/checked" element={<ViewScreen />} />
            <Route path="/unchecked" element={<UndoneScreen />} />
            <Route path="/edit/">
              <Route path=":id" element={<EditScreen />} />
              <Route index element={<EditScreen />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
