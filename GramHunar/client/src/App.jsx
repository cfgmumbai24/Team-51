import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Attendence from "./pages/Attendence";
import LandingPage from "./pages/LandingPage";
import Header from "./Components/Header";
import AddStudent from './pages/AddStudent';
import SchoolAnalysisPage from './pages/SchoolAnalysisPage';
import Login from './pages/Login';


function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          setIsLoggedIn(true);

        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
    };
    const PrivateRoute = ({ element: element}) => {
      return isLoggedIn ?  element : <Navigate to="/login" replace />;
  };
  console.log(localStorage.getItem('token'));

    return (
      <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/attendance" element={<PrivateRoute element={<Attendence />} />} />
              <Route path="/addstudent" element={<PrivateRoute element={<AddStudent />} />} />
              <Route path="/report" element={<PrivateRoute element={<SchoolAnalysisPage />} />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Routes>
      </Router>
  );
}

export default App;
