import { useState } from "react";

import "./App.css";
import StudentReport from "./components/StudentReport";
import StudentReportList from "./components/StudentReportList";
const students = [
  { id: 1, name: "Alice Smith" },
  { id: 2, name: "Bob Johnson" },
  { id: 3, name: "Charlie Brown" },
  // Add more student objects here
];

function App() {
  const [showMain, setShowMain] = useState(false);

  const handleClick = () => {
    console.log("Handle click");
    setShowMain(true);
  };
  return (
    <div className="grid-container">
      <StudentReportList students={students} handleClick={handleClick} />
      {showMain && <StudentReport />}
    </div>
  );
}

export default App;
