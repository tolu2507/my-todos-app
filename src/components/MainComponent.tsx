import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateScreen from "../Screen/CreateScreen";
import CreateUserScreen from "../Screen/CreateUserSreen";
import { DeleteScreen } from "../Screen/DeletedScreen";
import EditScreen from "../Screen/EditScreen";
import FeedandEnqScreen from "../Screen/FeedbackandEnquiresScreen";
import HomeScreen from "../Screen/HomeScreen";
import SigninScreen from "../Screen/SigninScreen";
import UndoneScreen from "../Screen/UndoneScreen";
import ViewScreen from "../Screen/ViewScreen";

function Main() {
  return (
    <main className="App-body">
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/" element={<SigninScreen />} />
        <Route path="/deleted" element={<DeleteScreen />} />
        <Route path="/create" element={<CreateScreen />} />
        <Route path="/createuser" element={<CreateUserScreen />} />
        <Route path="/checked" element={<ViewScreen />} />
        <Route path="/unchecked" element={<UndoneScreen />} />
        <Route path="/feedback&enquiries" element={<FeedandEnqScreen />} />
        <Route path="/edit/">
          <Route path=":id" element={<EditScreen />} />
          <Route index element={<EditScreen />} />
        </Route>
      </Routes>
    </main>
  );
}

export default Main;
