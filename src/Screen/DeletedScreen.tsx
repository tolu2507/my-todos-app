import React from "react";
import { Link } from "react-router-dom";
export function DeleteScreen() {
  alert("deleted");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20rem",
        border: ".1rem black solid",
        padding: "5rem",
        fontWeight: "bolder",
        fontSize: "Larger",
        backgroundColor: "red",
        cursor:"pointer"
      }}
    >
      <Link to="/home">Todo Successfully Deleted</Link>
    </div>
  );
}
