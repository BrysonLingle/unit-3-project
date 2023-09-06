import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function TeamDetails() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTeam(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : team ? (
        <div>
          <h1>{team.team.displayName}</h1>
          <div className="team-details">
            <p>Location: {team.team.location}</p>
            <p>Active: {team.team.isActive ? 'Yes' : 'No'}</p>
            <p>All-Star: {team.team.isAllStar ? 'Yes' : 'No'}</p>
            {team.team.links && team.team.links.length > 0 && (
                <div>
                <a href={team.team.links[1].href} target="_blank" rel="noopener noreferrer">
                  <button className="teamRosterButton">
                    Active Roster
                  </button>
                </a>
              </div>
              
            )}
            {team.color && (
              <div
                style={{
                  backgroundColor: team.color,
                }}
              ></div>
            )}
            <div>
                <a href={team.team.links[2].href} target="_blank" rel="noopener noreferrer">
                  <button className="teamRosterButton">
                    Player Stats
                  </button>
                </a>
              </div>
              <div>
                <a href={team.team.links[3].href} target="_blank" rel="noopener noreferrer">
                  <button className="teamRosterButton">
                    Schedule
                  </button>
                </a>
              </div>
          </div>
          {team.team.logos && team.team.logos.length > 0 && (
            <div className="logo-container">
              <img
                src={team.team.logos[0].href}
                alt={team.team.displayName + " Logo"}
                className="team-logo"
              />
            </div>
          )}
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}
