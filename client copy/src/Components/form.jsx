import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ student, closeForm }) => {
  const [formData, setFormData] = useState({
    ListeningSkills: 0,
    AttentionSpan: 0,
    Curiosity: 0,
    ReflectingAbility: 0,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const ratingData = {
      Student: student._id,
      ...formData,
    };

    try {
      const response = await axios.post('http://localhost:5001/attendence', ratingData);
      console.log('Attendance recorded:', response.data);

      toast.success('Attendance recorded successfully');
      

      setFormData({
        ListeningSkills: 0,
        AttentionSpan: 0,
        Curiosity: 0,
        ReflectingAbility: 0,
      });

      closeForm();

    } catch (error) {
      console.error('Error recording attendance:', error);

      if (error.response && error.response.status === 409) {
        toast.error('Evaluation already done for today');
        setError('Evaluation already done for today');
      } else {
        toast.error('Error adding attendance. Please try again.');
        setError(error.message);
      }
      
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parseInt(value),
    }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Enter Attendance for {student.name}</h2>
          <span
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={closeForm}
          >
            &times;
          </span>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Listening Skills */}
          <div>
            <label className="block font-bold mb-2">Listening Skills:</label>
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <div key={value}>
                  <input
                    type="radio"
                    name="ListeningSkills"
                    value={value}
                    checked={formData.ListeningSkills === value}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  <label>{value}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Attention Span */}
          <div>
            <label className="block font-bold mb-2">Attention Span:</label>
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <div key={value}>
                  <input
                    type="radio"
                    name="AttentionSpan"
                    value={value}
                    checked={formData.AttentionSpan === value}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  <label>{value}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Curiosity */}
          <div>
            <label className="block font-bold mb-2">Curiosity:</label>
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <div key={value}>
                  <input
                    type="radio"
                    name="Curiosity"
                    value={value}
                    checked={formData.Curiosity === value}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  <label>{value}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Reflecting Ability */}
          <div>
            <label className="block font-bold mb-2">Reflecting Ability:</label>
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <div key={value}>
                  <input
                    type="radio"
                    name="ReflectingAbility"
                    value={value}
                    checked={formData.ReflectingAbility === value}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  <label>{value}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
