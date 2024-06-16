import React, { useState } from 'react';
import { FaInfoCircle, FaCaretDown } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [family, setFamily] = useState("Kumar Family");
  const [loca, setLoca] = useState("1123,LohaFarms,Goregaon,Mumbai");
  const [mailid, setMailid] = useState("amitkumar@gmail.com");
  const [contact, setContact] = useState("+918800654787");
  const [goatnum, setGoatnum] = useState("2");
  const [count, setCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    setCount(count + 1); 
  };

  const handleNavigation = () => {
    navigate('/newpage'); 
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="background-image">
        <div className="details-section">
        <p>Family: <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{family}</span></p>
        <p>Location: <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{loca}</span></p>
        <p>Email: <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{mailid}</span></p>
        <p>Contact: <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{contact}</span></p>
        <p>Goat Count: <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{goatnum}</span></p>
        </div>
      </div>
      <div className="bg-img">
        <div className="info-section">
          <div><strong>If you do not have a goat, we'd be happy to get you one</strong></div>
          <button onClick={handleButtonClick}>New Goat</button>
        </div>
        <div className="new-section">
          <div><strong>If you already have a goat, tell us how we can help you!</strong></div>
          <div className="icons">
            <FaInfoCircle onClick={handleNavigation} style={{ cursor: 'pointer', marginRight: '10px' }} />
            <FaCaretDown onClick={toggleDropdown} style={{ cursor: 'pointer' }} />
            {showDropdown && (
              <ul className="dropdown">
                <li onClick={() => handleNavigation('/item1')}>Know Your Goat</li>
                <li onClick={() => handleNavigation('/item2')}>Emergency/Contact us</li>
                <li onClick={() => handleNavigation('/item3')}>Know More About Goats</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
function NewPage() {
  return <div>This is the new page!</div>;
}
function Item1() {
  return <div>This is Item 1 page!</div>;
}
function Item2() {
  return <div>This is Item 2 page!</div>;
}
function Item3() {
  return <div>This is Item 3 page!</div>;
}
function AppWrapper() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/newpage" element={<NewPage />} />
      <Route path="/item1" element={<Item1 />} />
      <Route path="/item2" element={<Item2 />} />
      <Route path="/item3" element={<Item3 />} />
    </Routes>
  );
}
export default AppWrapper;
