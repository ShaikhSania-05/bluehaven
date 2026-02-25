import Habit from "../models/habit.js";

export const createHabits = async (req, res) => {
  try {
    const { title, days } = req.body;

    const habit = await Habit.create({
      user: req.user.userId,
      title,
      days,
    });

    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({
      user: req.user.userId,
    });

    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
export const updateHabits = async (req, res) => {
  try {
    const { title, days } = req.body;

    const habit = await Habit.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId },
      { title, days },
      { new: true },
    );

    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteHabits = async (req, res) => {
  try {
    const habit = await Habit.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });

    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    res.status(200).json({ message: "Habit deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
