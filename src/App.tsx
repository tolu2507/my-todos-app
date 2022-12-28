import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateScreen from "./Screen/CreateScreen";
import { DeleteScreen } from "./Screen/DeletedScreen";
import EditScreen from "./Screen/EditScreen";
import HomeScreen from "./Screen/HomeScreen";
import UndoneScreen from "./Screen/UndoneScreen";
import ViewScreen from "./Screen/ViewScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>TODO-LIST</div>
          <div className="App-header-item">
            <ul className="App-header-item">
              <li>name</li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/doc">doc</Link>
              </li>
              <li>
                profile
                <div>
                  <div>share</div>
                  <div>signin</div>
                </div>
              </li>
            </ul>
            <div className="App-input">
              <input
                type="time"
                name="search"
                id="search"
                placeholder="search"
                onChange={(e) => "null"}
              />
            </div>
          </div>
        </header>
        <aside className="App-aside">
          <ul>
            <li>
              <Link to="/">About Todo</Link>
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
        </aside>
        <main className="App-body">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/deleted" element={<DeleteScreen/>} />
            <Route path="/create" element={<CreateScreen />} />
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
