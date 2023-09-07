import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./Teams";
import "./App.css";
import TeamDetails from './TeamDetails'

function App() {
  return (
    <Router>
      <header>
        
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Teams />} />
          {/* Specify the component to render for TeamDetails route */}
          <Route path="/TeamDetails/:id" element={<TeamDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
