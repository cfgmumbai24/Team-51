import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Attendence from "./pages/Attendence";
import LandingPage from "./pages/LandingPage";
import Header from "./Components/Header";
import AddStudent from './pages/AddStudent';
import SchoolAnalysisPage from './pages/SchoolAnalysisPage';

function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/attendance" element={<Attendence />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/report" element={<SchoolAnalysisPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
