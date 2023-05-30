import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Live from "./pages/Live";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="container">
      <nav>
        <ul>
          <Link to="/" className="list">
            Home
          </Link>
          <Link to="/course" className="list">
            Courses
          </Link>
          <Link to="/live" className="list">
            Live course
          </Link>
          <Link to="/contact" className="list">
            Contact
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/live" element={<Live />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;