import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import "tailwindcss/tailwind.css";

export default function TeamDetails() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTeam(data);
        setLoading(false);
        console.log(data.team);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="p-4">
      <button className="homeButton">
        <Link
          to="/"
          className="back-button text-blue-500 hover:"
        >
          Back to Teams
        </Link>
      </button>

      {loading ? (
        <div className="text-lg font-bold">Loading...</div>
      ) : team ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{team.team.displayName}</h1>
          <div className="team-details">
            <p className="text-red-5000-contrast text-lg font-bold">
              Location: {team.team.location}
            </p>
            <p className="text-red-500 text-lg font-bold">
              Active: {team.team.isActive ? "Yes" : "No"}
            </p>
            <p className="text-black-500 text-lg font-bold">
              All-Star: {team.team.isAllStar ? "Yes" : "No"}
            </p>
            <p className="text-black-500 text-lg font-bold">
              Record: {team.team.record.items[0]?.summary}
            </p>
            <p className="text-black-500 text-lg font-bold">
              Next Event:{" "}
              <a
                href={team.team.nextEvent[0]?.opponentStatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {team.team.nextEvent[0]?.name}
              </a>
            </p>
            <p className="text-black-500 text-lg font-bold">
              Stadium: {team.team.franchise.venue.fullName}
            </p>
            <p className="text-black-500 text-lg font-bold">
              Division Standings: {team.team.standingSummary}
            </p>

            {team.team.links && team.team.links.length > 0 && (
              <div className="mt-4">
                <a
                  href={team.team.links[1]?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="teamRosterButton bg-blue-500 text-white font-bold py-2 px-4 rounded">
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
                className="h-10 w-10 mt-4 rounded-full"
              ></div>
            )}

            <div>
              <a
                href={team.team.links[2]?.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="teamRosterButton bg-blue-500 text-white font-bold py-2 px-4 rounded">
                  Player Stats
                </button>
              </a>
            </div>

            <div>
              <a
                href={team.team.links[3]?.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="teamRosterButton bg-blue-500 text-white font-bold py-2 px-4 rounded">
                  Schedule
                </button>
              </a>
            </div>
          </div>

          {team.team.logos && team.team.logos.length > 0 && (
            <div className="logo-container mt-4">
              <img
                src={team.team.logos[0].href}
                alt={`${team.team.displayName} Logo`}
                className="team-logo"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="text-lg font-bold">No data available</div>
      )}
    </div>
  );
}
