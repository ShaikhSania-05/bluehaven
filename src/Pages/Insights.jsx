import { useEffect, useState } from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function Insights() {
  const [insights, setInsights] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    const fetchInsights = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/insights", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setInsights(data);
      } catch (err) {
        console.error("Error fetching insights:", err);
      }
    };

    fetchInsights();
  }, [token]);

  if (!insights) {
    return <div className="insights-page">Loading insights...</div>;
  }
  const totalCompleted = insights.totalHabitsCompleted;
  const completionRate = parseFloat(insights.habitCompletionRate) || 0;


const estimatedTotal =
  completionRate > 0
    ? totalCompleted / (completionRate / 100)
    : totalCompleted;

const missed = Math.max(
  0,
  Math.round(estimatedTotal - totalCompleted)
);
  const habitData = {
  labels: ["Completed", "Missed"],
  datasets: [
    {
      label: "Habit Activity",
      data: [totalCompleted, missed],
      backgroundColor: ["#6fe3e3", "#4cb7d7"],
      borderRadius: 8,
      barThickness: 150,
      categoryPercentage: 0.5,
      barPercentage: 0.6,
    },
  ],
};

  const habitOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
    },
  };
   
  const moodOrder = ["happy", "good", "neutral", "sad", "cry", "angry"];
  
  const moodScoreMap = {
  happy: 5,
  good: 4,
  neutral: 3,
  sad: 2,
  cry: 1.5,
  angry: 1
};

 const moodData = {
  labels: moodOrder,
  datasets: [
    {
      label: "Mood Frequency",
      data: moodOrder.map(
        mood => insights?.moodCount?.[mood] || 0
      ),
      borderColor: "#4cb7d8",
      borderWidth: 3,
      tension: 0.4,
      fill: false,
      pointRadius: 4
    },
    {
      label: "Mood Intensity",
      data: moodOrder.map(
        mood =>
          (insights?.moodCount?.[mood] || 0) *
          moodScoreMap[mood] * 0.3
      ),
      borderColor: "#2f8dbd",
      borderWidth: 2,
      tension: 0.4,
      fill: false,
      pointRadius: 3
    }
  ]
};

  const moodOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
    },
  };

         return (
        <div className="insights-page">
            <h1 className="insights-title">
                BlueHaven - Insight Dashboard
            </h1>
            <div className="insights-grid">
            <div className="insights-card">
                <h2 className="insights-heading">Habit Summary</h2>
                <Bar data={habitData} options={habitOptions}/>
                    <p> Completion Rate: {completionRate}% </p>
             <p> Most Consistent Habit: {insights.mostConsistentHabit || "None"} </p>
            </div>
            <div className="insights-card">
                <h2 className="insights-heading">Mood Log Summary</h2>
                <Line data={moodData} options={moodOptions}/>
                <p>
                    Most Frequent Mood:
                    {insights.mostFrequentMood || "None"}
                </p>
            </div>
         </div>
         <div className="insights-message">
            Keep it up! You did great this week ~
         </div>
        </div>
    );
};
export default Insights;

    
