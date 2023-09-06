import React, { useState, useEffect } from "react";

export default function Teams() {
    const [teamStats, setTeamStats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams');
                const data = await response.json();
                const teams = data.sports[0].leagues[0].teams
                console.log(data.sports[0].leagues[0].teams);
                console.log(teams[0].team.displayName)
                setTeamStats(teams);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data from API:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="team-list">
                    {Array.isArray(teamStats) ? (
                        teamStats.map((team, index) => (
                            <div className="card" key={index}>
                                <div className="card-title">
                                    <h3>{team.team.displayName}</h3>
                                </div>
                                <div className="card-stats">
                                    <p>Color {team.team.color}</p>
                                    <p>Alternate Color {team.team.alternateColor}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No data available</div>
                    )}
                </div>
            )}
        </div>
    );
}
