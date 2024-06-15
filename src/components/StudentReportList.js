import React, { useState } from "react";

const StudentList = ({ students, handleClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Filter students based on search term
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleViewReport = (student) => {
    setSelectedStudent(student); // Set the selected student
    handleClick(); // Call parent component's handleClick function
  };

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <input
        type="text"
        placeholder="Search students..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {currentStudents.map((student, index) => (
          <li key={index}>
            {student.name}
            <button onClick={() => handleViewReport(student)}>
              View Report
            </button>
            {/* <button onClick={handleClick}>View Report</button> */}
          </li>
        ))}
      </ul>
      {/* Pagination buttons */}
      <div className="pagination">
        {Array(Math.ceil(filteredStudents.length / studentsPerPage))
          .fill()
          .map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default StudentList;
