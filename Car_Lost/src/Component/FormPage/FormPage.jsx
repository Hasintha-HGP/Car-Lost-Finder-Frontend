import React, { useState } from "react";
import CarService from "../Service/CarService"; 
import "./FormPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    vehicleNumber: "",
    newLocation: "",
    status: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate status field
    if (formData.status !== "LOST" && formData.status !== "FOUND") {
      alert('Please enter a valid status: "Lost" or "Found"');
      return;
    }

    try {
      const response = await CarService.updateCarDetails(formData);

  setSuccessMessage(response.message || "Car details updated successfully!");
  setErrorMessage("");
  setFormData({ vehicleNumber: "", newLocation: "", status: "" }); 
  navigate("/MyProfile");
} catch (error) {
  const errorMessage = error.response?.data?.message || error.response?.data || error.message;
  setSuccessMessage("");
  setErrorMessage(`Error updating car details: ${errorMessage}`);
    }
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
              name="newLocation"
              value={formData.newLocation}
              onChange={handleChange}
              required
              placeholder="Enter Location"
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

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default FormPage;
