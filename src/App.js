import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Pomodoro from "./pages/Pomodoro";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
import Delete from "./pages/Delete";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer/:id" element={<Pomodoro />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
