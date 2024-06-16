import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    rollNumber: {
        type: Number,
        required: true,
    },
    class: {
        type: Number,
        required: true,
    },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;