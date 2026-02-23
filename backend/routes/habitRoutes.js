import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createHabits, getHabits, updateHabits, deleteHabits } from "../models/controller/habitcontroller.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", createHabits);

router.get("/", getHabits);

router.put("/:id", updateHabits);

router.delete("/:id", deleteHabits);

export default router;
