import mongoose from "mongoose";

const moodSchema = new 
mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    mood: {
        type: String,
        required: true,
    },
}, { timestamps: true});

export default mongoose.model("Mood", moodSchema);