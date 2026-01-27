function HabitTracker() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const habits = [
    "Reading",
    "Journaling",
    "Meditate",
    "Study",
    "Sketching",
  ];

  return (
    <div className="habit-page">
      <div className="habit-header">
        <h1 className="habit-title">Feature – Habit Tracker</h1>
        <button className="add-habit-button"> + Add Habit</button>
        <p className="habit-subtitle">Set Your Weekly Habits</p>
      </div>
      <div className="habit-grid">
        <div className="habit-row header-row">
          <div className="habit-label">Habits</div>
          {days.map((day) => (
            <div key={day} className="day-label">
              {day}
            </div>
          ))}
        </div>

        {habits.map((habit, index) => (
          <div className="habit-row" key={index}>
            <div className="habit-name">
              {habit}
            </div>

            {days.map((day) => (
              <input
                key={day}
                type="checkbox"
                className="habit-checkbox"
              />
            ))}
          </div>
        ))}
      </div>

      <div className="habit-save">
        <button className="save-button">Save</button>
      </div>
    </div>
  );
}

export default HabitTracker;
