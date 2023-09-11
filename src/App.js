import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./Teams";
import "./App.css";
import TeamDetails from "./TeamDetails";
import Footer from "./Footer.js";

function App() {
  return (
    <Router>
      <header></header>
      
      <main>
        <Routes>
          <Route path="/" element={<Teams />} />
          <Route path="/TeamDetails/:id" element={<TeamDetails />} />
        </Routes>
      </main>

      
      <Footer />
    </Router>
  );
}

export default App;
