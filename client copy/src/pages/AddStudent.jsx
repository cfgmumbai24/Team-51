import React, { useState } from 'react';
import axios from 'axios'; // Axios for making HTTP requests
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [classValue, setClassValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/students', {
        name,
        age: parseInt(age),
        rollNumber: parseInt(rollNumber),
        class: classValue
      });
      console.log('Student added:', response.data);

      if (response.status === 201) {
        toast.success('Student added successfully');
      } else {
        toast.error('Error adding student. Please try again.');
      }

      setName('');
      setAge('');
      setRollNumber('');
      setClassValue('');

    } catch (error) {
      console.error('Error adding student:', error);

      toast.error('Error adding student. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNumber">
            Roll Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rollNumber"
            type="number"
            placeholder="Enter roll number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classValue">
            Class
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="classValue"
            type="number"
            placeholder="Enter class"
            value={classValue}
            onChange={(e) => setClassValue(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
