import { getStudents,addStudents,getStudentBySchool } from "../controllers/Student.js";
import { verifyToken } from "../middlewares/auth.js";

import express from "express";

const StudentRouter = express.Router();

StudentRouter.get("/", verifyToken, getStudents);
StudentRouter.post("/",verifyToken,  addStudents);
StudentRouter.get("/school/:id",verifyToken,  getStudentBySchool);

export default StudentRouter;

