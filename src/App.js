import { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from "./components/nav";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import About from "./About";
import React from "react";


function App() {

  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route exact path="/" element={<Home /> } />
          <Route path="*" element={<ErrorPage /> } />
          <Route path="/About" element={<About /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
