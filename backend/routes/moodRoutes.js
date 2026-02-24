import express from "express";
import { saveMood, getMoods } from "../controllers/moodController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, saveMood);
router.get("/", authMiddleware, getMoods);

export default router;
