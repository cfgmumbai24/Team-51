import { GetAttendence,AddAttendence,GetAttendenceById } from "../controllers/Attendence.js";
import express from "express";
import { verifyToken } from "../middlewares/auth.js";
const AttendenceRouter = express.Router();

AttendenceRouter.get("/", verifyToken,  GetAttendence);
AttendenceRouter.post("/", verifyToken,  AddAttendence);
AttendenceRouter.get("/:id", verifyToken, GetAttendenceById);

export default AttendenceRouter;

