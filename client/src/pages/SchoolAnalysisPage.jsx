import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SchoolStats from '../Components/SchoolStats';
import StudentStats from '../Components/StudentStats';

const SchoolAnalysisPage = () => {
    const [students, setStudents] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [activeStudent, setActiveStudent] = useState(null);

    const handleStudentClick = (studentId) => {
        setActiveStudent(activeStudent === studentId ? null : studentId);
    };

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const studentsResponse = await axios.get('http://localhost:5001/students');
                const ratingsResponse = await axios.get('http://localhost:5001/attendence');

                setStudents(studentsResponse.data);
                setRatings(ratingsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">School Analysis</h1>
            <SchoolStats students={students} ratings={ratings} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {students.map((student) => (
                    <StudentStats
                        key={student._id}
                        student={student}
                        ratings={ratings}
                        isActive={activeStudent === student._id}
                        onClick={handleStudentClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default SchoolAnalysisPage;
