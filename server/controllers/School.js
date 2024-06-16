import School from "../models/School.js";
import jwt from 'jsonwebtoken';
const JWT_SECRET = 'dkjbsd4e43f28c28#!kjbnb1kjb11';


const getSchools = async (req, res) => {
    try {
        const schools = await School.find();
        res.status(200).json(schools);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const addSchool = async (req, res) => {
    try {
        const schoolData = req.body;

        const newSchool = new School(schoolData);
        await newSchool.save();

        res.status(201).json({ message: "School added successfully", school: newSchool });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getSchoolById = async (req, res) => {
    try {
        const { username, password } = req.body;
        const school = await School.findOne({ username, password });
        if (school) {
            const token = jwt.sign({ id: school._id }, JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({token});
        } else {
            res.status(404).json({ message: "Invalid username or password" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { getSchools, addSchool, getSchoolById };
