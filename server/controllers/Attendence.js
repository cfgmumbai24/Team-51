import Student from "../models/Student.js";
import mongoose from "mongoose";
import Attendence from "../models/Attendence.js";

const AddAttendence = async (req, res) => {
    const ISTOffset = 5.5 * 60 * 60 * 1000;
    try {
        const { Student, ListeningSkills, AttentionSpan, Curiosity, ReflectingAbility, ratings } = req.body;
        const currentDateUTC = new Date();
        const currentDate = new Date(currentDateUTC.getTime() + ISTOffset).toISOString().split('T')[0];
        const existingAttendence = await Attendence.findOne({
            Student,
            Date: currentDate
        });

        console.log(existingAttendence);

        if (existingAttendence) {
            return res.status(409).json({ message: 'Attendance already entered for today' });
        }

        const newAttendence = new Attendence({
            Student: new mongoose.Types.ObjectId(Student),
            ListeningSkills,
            AttentionSpan,
            Curiosity,
            ReflectingAbility,
            Date: currentDate 
        });

        await newAttendence.save();

        res.status(201).json(newAttendence);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
const GetAttendence = async (req, res) => {
    try {
        const Attendences = await Attendence.find();
        res.status(200).json(Attendences);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const GetAttendenceById = async (req, res) => {
    try {
        const { id } = req.params;
        const Attendence = await Attendence
            .findById(id)
            .populate("Student");

        res.status(200).json(Attendence);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export { AddAttendence, GetAttendence, GetAttendenceById };