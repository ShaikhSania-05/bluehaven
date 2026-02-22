import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await
    bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { identifier, password } = req.body;

    const user = await User.findOne({
        $or : [
            {email : identifier},
            {username: identifier}
        ]
     });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await 
    bcrypt.compare(password,user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
        {expiresIn: "2h"}
    );
    res.status(200).json({ message: "Login successful", token
     });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Protected route accessed",
        user: req.user
    });
});
export default router;
