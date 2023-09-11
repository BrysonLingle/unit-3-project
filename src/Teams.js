import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "./index.css";
import Footer from "./Footer";

export default function Teams() {
  const [teamStats, setTeamStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams"
        );
        const data = await response.json();
        const teams = data.sports[0].leagues[0].teams;
        setTeamStats(teams);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from API:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto flex-grow">
        <h1 className="text-center text-7xl font-bold mb-4">NFL Teams</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Slider {...slickSettings}>
            {Array.isArray(teamStats) ? (
              teamStats.map((team, index) => (
                <Link
                  to={`/TeamDetails/${team.team.id}`}
                  className="card-button"
                  key={index}
                >
                  <div className="card">
                    <div className="card-title">
                      <h3>{team.team.displayName}</h3>
                    </div>
                    <div className="card-stats">
                      {team.team.logos && team.team.logos.length > 0 && (
                        <img
                          src={team.team.logos[0].href}
                          alt={`${team.team.displayName} Logo`}
                          className="team-logo"
                        />
                      )}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div>No data available</div>
            )}
          </Slider>
        )}
      </div>
      <Footer />
    </div>
  );
}
