import React from "react";
import { Routes, Route } from "react-router-dom";
import Teams from "./Teams";
import "./App.css";
import TeamDetails from "./TeamDetails";


function App() {
  return (
    <div>


      <main>
        <Routes>
          <Route path="/" element={<Teams />} />
          <Route path="/TeamDetails/:id" element={<TeamDetails />} />
        </Routes>
      </main>


      
    </div>
  );
}

export default App;
