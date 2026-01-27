import {FaSmile,FaRegSmile,FaMeh,FaFrown,FaRegFrown,FaSadTear,FaAngry} from "react-icons/fa";

function Moodlog () {
    return (
        <div className="moodlog-page">
        <div className="moodlog-header">
            <h1 className="moodlog-title">BlueHaven - Mood Log</h1>
            <p className="moodlog-subtitles">
                Set Your Weekly Logs 
            </p>
        </div>
        <div className="moodlog-grid">
            <div className="moodlog-emoji-row">
                <div className="empty-cell"> </div>
              <FaSmile className="mood-icon"/>
              <FaRegSmile className="mood-icon"/>
              <FaMeh className="mood-icon"/>
              <FaFrown className="mood-icon"/>
              <FaRegFrown className="mood-icon"/>
              <FaSadTear className="mood-icon"/>
              <FaAngry className="mood-icon"/>
            </div>
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map (day=> (
                <div className="moodlog-row" key={day}> 
                <div className="day-label">{day}</div>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                </div>
           ))}
            <div className="moodlog-save">
                <button className="save-button">Save</button>
            </div>
        </div>
    </div>
    );
};
export default Moodlog;

