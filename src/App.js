import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";

import Login from "./routes/Login";

function App() {
  return (

    <>
      <Routes>
        <Route path= "/" element= {<Login />}/>;
      </Routes>
    </>
  );
}

export default App;
