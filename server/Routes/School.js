import { getSchools, addSchool, getSchoolById } from '../controllers/School.js';
import express from "express";


const SchoolRouter = express.Router();

SchoolRouter.get("/", getSchools);
SchoolRouter.post("/", addSchool);
SchoolRouter.post("/login", getSchoolById);

export default SchoolRouter;