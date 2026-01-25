import habittracking from "../assets/images/habittracking.png";
import moodlogtracking from "../assets/images/moodlogtracking.png"

function Features() {
    return (
       <section 
       className="features-section">
        <div className="features-header">
        <h2
       className="features-title brand-font">Core Features</h2>
       <p className="features-desc">
        Track habits, log your mood & more to improve your well-being.
       </p>
       </div>
       <div className="features-cards">
        <div className="feature-card">
            <h3>Track your Habits</h3>
            <img src={habittracking} alt="habittracking"/>
            <p>
                Build consistency by 
                tracking your daily habits and
                routines mindfully.
            </p>
            <button>Explore</button>
        </div>
        <div className="feature-card">
            <h3>Log your Mood</h3>
            <img src={moodlogtracking} alt="moodlogtracking"/>
            <p>
                Reflect on your emotions
                and understand patterns in your mood.
            </p>
            <button>Explore</button>
        </div>
        <div className="feature-card">
            <h3>View Insights</h3>
            <p>
                Get gentle insights to
                help you make healthier digital choices.
            </p>
            <button>Learn More</button>
        </div>
       </div>
       </section>
    );
}
export default Features;