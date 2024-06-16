import { getStudents,addStudents,getStudentBySchool } from "../controllers/Student.js";

import express from "express";

const StudentRouter = express.Router();

StudentRouter.get("/", getStudents);
StudentRouter.post("/", addStudents);
StudentRouter.get("/school/:id", getStudentBySchool);

export default StudentRouter;

