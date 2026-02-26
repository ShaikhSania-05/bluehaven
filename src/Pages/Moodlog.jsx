import { useState, useEffect } from "react";
import {
  FaSmile,
  FaRegSmile,
  FaMeh,
  FaRegFrown,
  FaSadTear,
  FaAngry,
} from "react-icons/fa";

function Moodlog() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [moods, setMoods] = useState({});
  const token = localStorage.getItem("token");

  const moodIcons = [
    { key: "happy", icon: <FaSmile /> },
    { key: "good", icon: <FaRegSmile /> },
    { key: "neutral", icon: <FaMeh /> },
    { key: "sad", icon: <FaRegFrown /> },
    { key: "cry", icon: <FaSadTear /> },
    { key: "angry", icon: <FaAngry /> },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchMoods = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/moods`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          console.error("Failed to fetch moods");
          return;
        }

        const data = await res.json();

        const moodMap = {};
        data.forEach((item) => {
          moodMap[item.day] = item.mood;
        });

        setMoods(moodMap);
      } catch (err) {
        console.error("Error fetching moods:", err);
      }
    };

    fetchMoods();
  }, []);

  return (
    <div className="moodlog-page">
      <div className="moodlog-header">
        <h1 className="moodlog-title">Bluehaven – Mood Log</h1>
        <p className="moodlog-subtitle">Set your weekly logs</p>
      </div>

      <div className="moodlog-grid">
        {days.map((day) => (
          <div key={day} className="moodlog-row">
            <div className="day-label">{day}</div>

            <div className="mood-icons">
              {moodIcons.map((mood) => (
                <button
                  key={mood.key}
                  className={`mood-icon ${
                    moods[day] === mood.key ? "active" : ""
                  }`}
                  onClick={async () => {
                    if (!token) return;

                    try {
                      const res = await fetch(
                        `${import.meta.env.VITE_API_URL}/api/moods`,
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                          },
                          body: JSON.stringify({
                            day,
                            mood: mood.key,
                          }),
                        },
                      );

                      if (!res.ok) {
                        console.error("Failed to save mood");
                        return;
                      }

                      const data = await res.json();

                      setMoods((prev) => ({
                        ...prev,
                        [day]: data.mood,
                      }));
                    } catch (err) {
                      console.error("Error saving mood:", err);
                    }
                  }}
                >
                  {mood.icon}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Moodlog;
