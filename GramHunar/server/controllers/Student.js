import Student from "../models/Student.js";
const JWT_SECRET = 'dkjbsd4e43f28c28#!kjbnb1kjb11';


const getStudents = async (req, res) => {

    try {
        const students = await Student.find({ school: req.schoolId });
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const addStudents = async (req, res) => {
    try {
        const studentData = {
            ...req.body,
            school: req.schoolId, // Assuming the school field in Student model represents schoolId
        };
        const newStudent = new Student(studentData);
        await newStudent.save();

        res.status(201).json({ message: "Student added successfully", student: newStudent });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getStudentBySchool = async (req, res) => {
    try {
        const { id } = req.params;
        const students = await Student.find({ school: id });

        if (students.length === 0) {
            return res.status(404).json({ message: "No students found for this school" });
        } res.status(200).json(students);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export { getStudents, addStudents, getStudentBySchool };