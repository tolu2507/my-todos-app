import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadDb } from "../hooks/localStorageHook";
import { CREATEUSER } from "../inteface";

function Aside() {
  const [user, setName]: any = useState([]);

  useEffect(() => {
    const db = loadDb();
    return setName(db);
  }, [user]);

  return (
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
  );
}

export default Aside;
