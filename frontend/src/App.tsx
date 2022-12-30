import React from "react";
import { BrowserRouter } from "react-router-dom";
import Aside from "./components/AsideComponent";
import Header from "./components/HeaderComponent";
import Main from "./components/MainComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
