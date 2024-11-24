import React, { useState } from 'react';
import axios from 'axios';

const SelfAssessmentForm = () => {
  const [formData, setFormData] = useState({
    communication: 0,
    decisionMaking: 0,
    conflictManagement: 0,
    // Add other areas here...
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/assessment", formData);
      console.log("Assessment Submitted", response.data);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Communication: </label>
      <input type="number" name="communication" value={formData.communication} onChange={handleChange} min="1" max="5" />
      <label>Decision Making: </label>
      <input type="number" name="decisionMaking" value={formData.decisionMaking} onChange={handleChange} min="1" max="5" />
      <label>Conflict Management: </label>
      <input type="number" name="conflictManagement" value={formData.conflictManagement} onChange={handleChange} min="1" max="5" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SelfAssessmentForm;
