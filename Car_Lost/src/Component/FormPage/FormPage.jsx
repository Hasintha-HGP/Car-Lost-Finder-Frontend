import React, { useState } from "react";
import "./FormPage.css";

const FormPage = () => {
  const [formData, setFormData] = useState({
    vehicleNumber: "",
    location: "",
    dateTime: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h2>Update Vehicle Status</h2>
        <form onSubmit={handleSubmit} className="form-box">
          <div className="form-group">
            <label>Vehicle Register Number</label>
            <input
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              required
              placeholder="Enter Vehicle Number"
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Enter Location"
            />
          </div>

          <div className="form-group">
            <label>Date & Time</label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              placeholder='Type "Lost" or "Found"'
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
