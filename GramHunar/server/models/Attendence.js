import mongoose from "mongoose";

const attendenceSchema = new mongoose.Schema({
    Student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
    },
    ListeningSkills: {
        type: Number,
        required: true,
    },
    AttentionSpan: {
        type: Number,
        required: true,
    },
    Curiosity: {
        type: Number,
        required: true,
    },
    ReflectingAbility : {
        type: Number,
        required: true,
    },
    Date: {
        type: String,
        required: true,
    },
});

const Attendence = mongoose.model("Attendence", attendenceSchema);

export default Attendence;
