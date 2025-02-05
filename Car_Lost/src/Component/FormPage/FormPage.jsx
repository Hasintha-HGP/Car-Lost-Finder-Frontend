import React, { useState } from "react";
import CarService from "../Service/CarService"; 
import "./FormPage.css";

const FormPage = () => {
  const [formData, setFormData] = useState({
    vehicleNumber: "",
    location: "",
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
      // Call the updateCar function from CarService
      const response = await CarService.updateCarDetails(formData);
      
      // Set success message
      setSuccessMessage("Car details updated successfully!");
      setErrorMessage(""); // Clear any previous error message
      setFormData({ vehicleNumber: "", location: "", status: "" }); // Reset form
    } catch (error) {
      // Handle error
      const errorMessage = error.response ? error.response.data : error.message;
      setSuccessMessage(""); // Clear any previous success message
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
              name="location"
              value={formData.location}
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
