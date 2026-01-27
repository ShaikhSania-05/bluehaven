import {Chart as ChartJs,CategoryScale,LinearScale,BarElement,PointElement,LineElement,Tooltip,Legend} from "chart.js";
import {Bar, Line} from "react-chartjs-2"; 
ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);
function Insights () {
    const habitData = {
        labels: ["Mon","Tue","Wed","Thu","Fri"],
        datasets: [
             {
                label: "Habits Completed",
                data: [20,30,35,50,65],
                backgroundColor: "#6fe3e3",
            },
            {
                label: "Consistency",
                data: [15,22,25,40,57],
                backgroundColor: "#4cb7d7",
            },
            {
                label: "Streak",
                data: [8,15,20,25,27],
                backgroundColor: "#2f8dbd",
            },
        ],
    };
    const habitOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    }
    const moodData = {
        labels: ["Day1","Day2","Day3","Day4","Day5"],
        datasets: [
            {
                label: "Mood Trend",
                data: [10,8,20,15,25],
                borderColor: "#4cb7d8",
                backgroundColor:"transparent",
                tension: 0.4,
            },
            {
                label: "Energy Level",
                data: [18,30,20,40,42],
                borderColor: "#2f8dbd",
                backgroundColor:"transparent",
                tension: 0.4,
            },
        ],
    }
    const moodOptions= {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
        },
    }
         return (
        <div className="insights-page">
            <h1 className="insights-title">
                BlueHaven - Insight Dashboard
            </h1>
            <div className="insights-grid">
            <div className="insights-card">
                <h2 className="insights-heading">Habit Summary</h2>
                <Bar data={habitData} options={habitOptions}/>
            </div>
            <div className="insights-card">
                <h2 className="insights-heading">Mood Log Summary</h2>
                <Line data={moodData} options={moodOptions}/>
            </div>
         </div>
         <div className="insights-message">
            Keep it up! You did great this week ~
         </div>
        </div>
    );
};
export default Insights;

    
