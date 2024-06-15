import React, { useState } from "react";
import "./TestResults.css";

const FormTemplate = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Test Results</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="studentId">
            Student ID
          </label>
          <input
            type="number"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleInputChange}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="studentName">
            Student Name
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleInputChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="FLscore">
            Foundation Literacy Score
          </label>
          <input
            type="number"
            id="FLscore"
            name="FLscore"
            value={formData.FLscore}
            onChange={handleInputChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="FLgrade">
            Foundation Literacy Grade
          </label>
          <select name="FLgrade" class="select-box">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="FNscore">
            Foundation Numeracy Score
          </label>
          <input
            type="number"
            id="FNscore"
            name="FNscore"
            value={formData.FNscore}
            onChange={handleInputChange}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="FNgrade">
            Foundation Numeracy Grade
          </label>
          <select name="FNgrade" class="select-box">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormTemplate;
