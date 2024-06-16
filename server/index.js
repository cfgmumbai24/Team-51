import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import ConnectDB from './db/index.js';
import AttendenceRouter from './Routes/attendence.js';
import StudentRouter from './Routes/Student.js';
import SchoolRouter from './Routes/School.js';


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/students", StudentRouter);
app.use("/attendence", AttendenceRouter);
app.use("/school", SchoolRouter);


ConnectDB().then(async () => {
    app.listen(5001, () => {
        console.log("Server is running on port 5001");
    });
}).catch((error) => {
    console.log("Error connecting to the database", error.message);
});