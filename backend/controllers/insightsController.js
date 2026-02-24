import Habit from "../models/habit.js";
import Mood from "../models/mood.js";

export const getInsights = async (req, res) => {
  try {
    const userId = req.user.userId;

    const habits = await Habit.find({ user: userId });
    const moods = await Mood.find({ user: userId });

    let totalHabitsCompleted = 0;
    let mostConsistentHabit = null;
    let maxDays = 0;

    habits.forEach((habit) => {
      const completedDays = habit.days.length;
      totalHabitsCompleted += completedDays;

      if (completedDays > maxDays) {
        maxDays = completedDays;
        mostConsistentHabit = habit.title;
      }
    });

    const totalPossible = habits.length * 7;
    const habitCompletionRate =
      totalPossible > 0
        ? ((totalHabitsCompleted / totalPossible) * 100).toFixed(1)
        : 0;

    const moodCount = {};
    let mostFrequentMood = null;
    let maxMoodCount = 0;

    moods.forEach((m) => {
      moodCount[m.mood] = (moodCount[m.mood] || 0) + 1;

      if (moodCount[m.mood] > maxMoodCount) {
        maxMoodCount = moodCount[m.mood];
        mostFrequentMood = m.mood;
      }
    });

    res.status(200).json({
      totalHabitsCompleted,
      mostConsistentHabit,
      habitCompletionRate,
      moodCount,
      mostFrequentMood,
    });

  } catch (error) {
    res.status(500).json({ message: "Error generating insights" });
  }
};
