import { useEffect, useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

function HabitTracker() {
  const [showModal, setShowModal] = useState(false);
  const [newHabit, setNewHabit] = useState("");
  const [habits, setHabits] = useState([]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const token = localStorage.getItem("token");
  const cancelAddHabit = () => {
    setShowModal(false);
    setNewHabit("");
  };
  const fetchHabits = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/habits`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        console.error("Failed fetching habits");
        return;
      }

      const data = await res.json();
      setHabits(data);
    } catch (err) {
      console.error("Error fetching habits:", err);
    }
  };

  useEffect(() => {
    if (token) fetchHabits();
  }, [token]);

  const confirmAddHabit = async () => {
    if (!newHabit.trim()) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/habits`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: newHabit.trim(),
          days: [],
        }),
      });

      if (!res.ok) {
        console.error("Failed adding habit");
        return;
      }

      const data = await res.json();
      setHabits((prev) => [...prev, data]);

      setNewHabit("");
      setShowModal(false);
    } catch (err) {
      console.error("Error adding habit:", err);
    }
  };

  const deleteHabit = async (habitId) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/habits/${habitId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!res.ok) {
        console.error("Failed deleting habit");
        return;
      }

      setHabits((prev) => prev.filter((habit) => habit._id !== habitId));
    } catch (err) {
      console.error("Error deleting habit:", err);
    }
  };

  const toggleHabitDay = async (habitId, day) => {
    const habit = habits.find((h) => h._id === habitId);
    if (!habit) return;

    const updatedDays = habit.days?.includes(day)
      ? habit.days.filter((d) => d !== day)
      : [...(habit.days || []), day];

    setHabits((prev) =>
      prev.map((h) => (h._id === habitId ? { ...h, days: updatedDays } : h)),
    );

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/habits/${habitId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ days: updatedDays }),
        },
      );

      if (!res.ok) {
        console.error("Failed updating habit");
        fetchHabits();
      }
    } catch (err) {
      console.error("Toggle update error:", err);
      fetchHabits();
    }
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

        <div
          className="day-label add-column"
          onClick={() => setShowModal(true)}
        >
          <FiPlus />
        </div>

        {habits.map((habit) => (
          <div className="habit-row" key={habit._id}>
            <div className="habit-name">{habit.title}</div>

            {days.map((day) => (
              <input
                key={day}
                type="checkbox"
                className="habit-checkbox"
                checked={habit.days?.includes(day)}
                onChange={() => toggleHabitDay(habit._id, day)}
              />
            ))}

            <FiTrash2
              className="habit-delete"
              title="Delete habit"
              onClick={() => deleteHabit(habit._id)}
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
