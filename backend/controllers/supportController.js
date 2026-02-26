import Support from "../models/support.js";

export const submitSupport = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ message: "Message is required" });
    }

    const newMessage = new Support({
      user: req.user?.userId || null,
      message,
    });

    await newMessage.save();

    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
