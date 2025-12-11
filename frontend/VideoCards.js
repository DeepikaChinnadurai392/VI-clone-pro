import React, { useEffect, useState } from "react";
import YouTube from "react-youtube"; // <-- Added import

export default function VideoCards() {

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const videoDescriptions = {
    1: "Virtual Internships give students hands-on experience in real companies. They learn practical skills, teamwork, and professional etiquette, preparing them for their future careers.",
    2: "These internships have a global reach. Students collaborate with companies across countries, understand diverse work cultures, and make an impact internationally through their projects.",
    3: "Students share their personal journeys, challenges, and growth during the internships. They talk about real experiences, learning opportunities, and how it shaped their careers.",
    4: "The future of remote internships is bright. Students adapt to online work environments, develop digital communication skills, and gain experience in modern virtual workplaces."
  };

  useEffect(() => {
    fetch("http://localhost:8081/api/videos")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        if (Array.isArray(data)) {
          setVideos(data);
        } else if (Array.isArray(data.videos)) {
          setVideos(data.videos);
        } else {
          setVideos([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setVideos([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const videoOptions = {
    width: "400",
    height: "400",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <h2
        style={{
          fontWeight: "bold",
          fontSize: "2rem",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        <b>Real Stories. Real Impact</b>
      </h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 25px",
          textAlign: "center",
          fontSize: "1.3rem",
        }}
      >
        <b>Discover how students gain global experience and transform their
        careers through Virtual Internships.</b>
      </p>

      {loading && (
        <p style={{ textAlign: "center", fontSize: "1.9rem" }}>Loading videos...</p>
      )}

      {!loading && videos.length === 0 && (
        <p style={{ textAlign: "center", color: "gray" }}>No videos available.</p>
      )}

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "50px",
          padding: "5px 5px 10px 5px",
          scrollbarWidth: "thin",
        }}
      >
        {Array.isArray(videos) &&
          videos.map((video) => (
            <div
              key={video.id}
              style={{
                flex: "0 0 auto",
                width: "320px",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                borderRadius: "10px",
                backgroundColor: "#fff",
                padding: "12px",
              }}
            >
              {/* Replaced iframe with YouTube component */}
              <YouTube videoId={video.videoId} opts={videoOptions} />

              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginTop: "10px",
                  marginBottom: "5px",
                  textAlign: "center",
                }}
              >
                {video.title}
              </h3>

              <p
                style={{
                  fontSize: "1.3rem",
                  lineHeight: "1.35rem",
                  textAlign: "justify",
                }}
              >
                {video.description || videoDescriptions[video.id] }
              </p>
            </div>
          ))}
      </div>

      <style>
        {`
          div::-webkit-scrollbar {
            height: 7px;
          }
          div::-webkit-scrollbar-track {
            background: #eaeaea;
            border-radius: 10px;
          }
          div::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }
          div::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      </style>
    </div>
  );
}