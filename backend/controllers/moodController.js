import Mood from "../models/mood.js";

export const saveMood = async (req, res) => {
  try {
    const { day, mood } = req.body;

    let existingMood = await Mood.findOne({
      user: req.user.userId,
      day,
    });

    if (existingMood) {
      existingMood.mood = mood;
      await existingMood.save();
      return res.status(200).json(existingMood);
    }

    const newMood = new Mood({
      user: req.user.userId,
      day,
      mood,
    });

    await newMood.save();
    res.status(201).json(newMood);
  } catch (error) {
    res.status(500).json({ message: "Error saving mood" });
  }
};

export const getMoods = async (req, res) => {
  try {
    const moods = await Mood.find({
      user: req.user.userId,
    });

    res.status(200).json(moods);
  } catch (error) {
    res.status(500).json({ message: "Error fetching moods" });
  }
};
