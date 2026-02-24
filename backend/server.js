import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import habitRoutes from "./routes/habitRoutes.js";
import moodRoutes from "./routes/moodRoutes.js";
import insightsRoutes from "./routes/insightsRoutes.js";
import supportRoutes from "./routes/supportRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/habits",habitRoutes);
app.use("/api/moods",moodRoutes);
app.use("/api/insights",insightsRoutes);
app.use("/api/support",supportRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error(`"MongoDB Connection Failed:",err.message`);
});
app.get ("/", (req, res) => {
    res.send ("Bluehaven Backend Running");
});
