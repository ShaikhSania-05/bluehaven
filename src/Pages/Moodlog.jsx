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
  const handleSave = () => {
    console.log("Mood log saved")
  };
  const [moods, setMoods] = useState(() => {
    const saved = localStorage.getItem("moods");
    return saved
      ? JSON.parse(saved)
      : {
          Mon: null,
          Tue: null,
          Wed: null,
          Thu: null,
          Fri: null,
          Sat: null,
          Sun: null,
        };
  });

  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(moods));
  }, [moods]);

  const moodIcons = [
    { key: "happy", icon: <FaSmile /> },
    { key: "good", icon: <FaRegSmile /> },
    { key: "neutral", icon: <FaMeh /> },
    { key: "sad", icon: <FaRegFrown /> },
    { key: "cry", icon: <FaSadTear /> },
    { key: "angry", icon: <FaAngry /> },
  ];

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
                  onClick={() =>
                    setMoods((prev) => ({
                      ...prev,
                      [day]: mood.key,
                    }))
                  }
                >
                  {mood.icon}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="moodlog-save">
        <button className="save-button"
         onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
export default Moodlog;