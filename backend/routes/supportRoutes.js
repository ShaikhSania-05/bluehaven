import express from "express";
import { submitSupport } from "../controllers/supportController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, submitSupport);

export default router;
