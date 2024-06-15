import React, { useState } from "react";
import "./HealthCard.css";

const HealthCard = () => {
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
      <h2 className="form-title">Health Card</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="goatHeight">
            Goat Height
          </label>
          <input
            type="text"
            id="goatHeight"
            name="goatHeight"
            value={formData.goatHeight}
            onChange={handleInputChange}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="goatWeight">
            Goat Weight
          </label>
          <input
            type="text"
            id="goatWeight"
            name="goatWeight"
            value={formData.goatWeight}
            onChange={handleInputChange}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="diseases">
            Diseases
          </label>
          <input
            type="text"
            id="diseases"
            name="diseases"
            value={formData.diseases}
            onChange={handleInputChange}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="vaccinations">
            Vaccinations provided
          </label>
          <input
            type="text"
            id="vaccinations"
            name="vaccinations"
            value={formData.vaccinations}
            onChange={handleInputChange}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="goatGender">
            Goat Gender
          </label>
          <select name="goatGender" class="select-box">
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label" htmlFor="birthGiven">
            Birth Given
          </label>
          <select name="birthGiven" class="select-box">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HealthCard;
