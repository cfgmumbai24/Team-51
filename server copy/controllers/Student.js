import Student from '../models/Student.js';

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    // console.log(students);
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addStudents = async (req, res) => {
  try {
    const studentData = req.body;

    const newStudent = new Student(studentData);
    await newStudent.save();

    res
      .status(201)
      .json({ message: 'Student added successfully', student: newStudent });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getStudents, addStudents, getStudentById };
