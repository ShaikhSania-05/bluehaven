import express from "express";
import { submitSupport } from "../controllers/supportController.js";

const router = express.Router();

router.post("/", submitSupport);

export default router;
