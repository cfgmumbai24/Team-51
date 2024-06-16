// src/Attendence.js
import { useEffect, useState } from "react";
import Student from "../Components/Student";
import './Attendence.css';
const Attendence = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:5001/students', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch students');
                }

                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error('Error fetching students:', error.message);
                // Handle error as needed
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="main">
            <h1>Attendance</h1>
            <div className="student">
            {students.map((student) => (
                <Student key={student._id} student={student} />
            ))}
            </div>
        </div>
    );
};

export default Attendence;
