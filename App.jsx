import React from 'react';
import "./App.css";

function App(){
    return (
      <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Health Card</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Goat Height' />
            <input type="text" placeholder='Goat Weight' />
            <input type="text" placeholder='Diseases (if any)' />
            <input type="text" placeholder='Vaccinations provided' />
            <input type="text" placeholder='Goat Gender' />
            <input type="text" placeholder='Birth Given' />
          </div>
          <button>Submit</button>
        </div>
        <div className="new-box">
        <h2>Recommended Information about the Goat</h2>
      </div>
      </div>
    );
}


export default App;