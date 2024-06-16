import React, { useState } from "react";
import "./HealthCard.css";
import marked from 'marked' ;

const HealthCard = () => {
  const [formData, setFormData] = useState({
    goatHeight: "",
    goatWeight: "",
    diseases: "",
    vaccinations: "",
    goatGender: "M",
    birthGiven: "yes",
  });
  const [chatbotResponse, setChatbotResponse] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);

    try {
      const response = await fetch("http://127.0.0.1:5000/ask2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: formData }),
      });

      if (response.ok) {
        const data = await response.json();
        setChatbotResponse(data.response);
      } else {
        setChatbotResponse("Error: Unable to get response from the server.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setChatbotResponse("Error: Unable to get response from the server.");
    }

    setFormData({
      goatHeight: "",
      goatWeight: "",
      diseases: "",
      vaccinations: "",
      goatGender: "M",
      birthGiven: "yes",
    });
  };

  return (
    <>
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
              Symptoms
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
              Vaccinations Provided
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
            <select
              name="goatGender"
              value={formData.goatGender}
              onChange={handleInputChange}
              className="select-box"
            >
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="birthGiven">
              Birth Given
            </label>
            <select
              name="birthGiven"
              value={formData.birthGiven}
              onChange={handleInputChange}
              className="select-box"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
      <div className="parent-container">
        <div className="container-chatbot">
          <h3>Chatbot</h3>
          <p>{chatbotResponse}</p>
        </div>
      </div>
    </>
  );
};

export default HealthCard;
