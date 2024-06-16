import { getSchools, addSchool, getSchoolById } from '../controllers/School.js';
import express from "express";
import { verifyToken } from "../middlewares/auth.js";


const SchoolRouter = express.Router();

SchoolRouter.get("/", verifyToken, getSchools);
SchoolRouter.post("/", verifyToken, addSchool);
SchoolRouter.post("/login", getSchoolById);

export default SchoolRouter;