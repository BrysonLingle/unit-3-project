import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Teams() {
//   const [teamStats, setTeamStats] = useState([]);
//   const [loading, setLoading] = useState(true);

  export default function Teams() {
    const [teamStats, setTeamStats] = useState([])
    useEffect(() => {
        fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
            .then(response => response.json())
            .then(data => setTeamStats(data))
            .catch(console.error)
    }, []);

  return (
    <div className="container">
  
       : (
        <div className="team-list">
          {teamStats.map((team, index) => (
            <div className="card" key={index}>
              <div className="card-title">
                <h3>{team.name}</h3>
              </div>
              <div className="card-stats">
                <p>Wins: {team.wins}</p>
                <p>Losses: {team.loses}</p>
                
              </div>
            </div>
          ))}
        </div>
      )
    </div>
  );
}

