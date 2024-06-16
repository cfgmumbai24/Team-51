import logo from "./logo.svg";
import "./App.css";
import HealthCard from "./pages/HealthCard";
import Home from "./pages/HomePage";
import { useState } from "react";

function App() {
  const [showMain, setShowMain] = useState(false);

  const handleClick = () => {
    console.log("Handle click");
    setShowMain(true);
  };
  return (
    <div>
      <Home handleClick={handleClick} />
      {showMain && <HealthCard />}
    </div>
  );
}

export default App;
