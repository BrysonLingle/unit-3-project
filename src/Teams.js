import React, { useState, useEffect } from "react";
import axios from "axios";

function Teams() {
  const [teamStats, setTeamStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with the new API endpoint and key
        const response = await axios.get(
          "https://nfl-team-stats1.p.rapidapi.com/teamStats",
          {
            headers: {
              "x-rapidapi-host": "nfl-team-stats1.p.rapidapi.com",
              "x-rapidapi-key": "c6dbe658b5mshf53b66a8dd1955cp19f43ajsnb8ec20c4af94",
            },
          }
        );

        if (response.data && response.data.results) {
          const standingsData = response.data.results[0].league.standings[0];
          setTeamStats(standingsData.map((team) => team.team));
        } else {
          console.error("No 'results' property found in API response:", response.data);
          setTeamStats([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
}

export default Teams;
