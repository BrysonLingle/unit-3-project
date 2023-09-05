import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./Teams";
import "./App.css";


function App() {
  return (
    <Router>
      <header>
        <h1>NFL Teams</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Teams />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
