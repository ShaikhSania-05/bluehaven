import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getInsights } from "../controllers/insightsController.js";

const router = express.Router();

router.get("/", authMiddleware, getInsights);

export default router;
