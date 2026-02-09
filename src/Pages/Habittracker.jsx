import { useEffect, useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

function HabitTracker() {
  const [showModal, setShowModal] = useState(false);
  const [newHabit, setNewHabit] = useState("");
  const [habits, setHabits] = useState(() => {
    const savedHabits =
    localStorage.getItem("habits");
    return savedHabits
    ? window.JSON.parse(savedHabits)
    :[
    "Reading",
    "Journaling",
    "Meditate",
    "Study",
    "Sketching",
    "Completions",
    ];
});
 useEffect(() => {
   localStorage.setItem("habits",
    window.JSON.stringify(habits));
}, [habits]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const addHabit = () => {
    setShowModal(true);
  };
  const confirmAddHabit = () => {
    if (!newHabit.trim()) return;

    setHabits(prev => [...prev,newHabit.trim()]);
    setNewHabit("");
    setShowModal(false);
  };
  const cancelAddHabit = () => {
    setNewHabit("");
    setShowModal(false);
  };
  const deleteHabit = (indexToDelete) => {
    setHabits((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  };

  return (

    <div className="habit-page">
      <h1 className="habit-title">Feature - Habit Tracker</h1>
      <p className="habit-subtitle">Set your weekly habits</p>

      <div className="habit-grid">
      
        <div className="habit-label">Habits</div>

        {days.map((day) => (
          <div key={day} className="day-label">
            {day}
          </div>
        ))}

        <div className="day-label add-column" onClick={addHabit}>
          <FiPlus />
        </div>

        
        {habits.map((habit, index) => (
          <div className="habit-row" key={index}>
            <div className="habit-name">{habit}</div>

            {days.map((day) => (
              <input
                key={day}
                type="checkbox"
                className="habit-checkbox"
              />
            ))}

            <FiTrash2
              className="habit-delete"
              title="Delete habit"
              onClick={() => deleteHabit(index)}
            />
          </div>
        ))}
      </div>
      
      {showModal && (
  <div className="modal-overlay">
    <div className="modal-box">
      <h2>Add your habit</h2>

      <input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="Enter habit name"
      />

      <div className="modal-actions">
        <button onClick={confirmAddHabit}>Add</button>
        <button onClick={cancelAddHabit}>Cancel</button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
export default HabitTracker;