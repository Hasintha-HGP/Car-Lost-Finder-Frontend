import React, { useState } from "react";
import "./AddCar.css"; // Import the CSS file

function AddCar() {
  const [formData, setFormData] = useState({
    ownerId: "",
    ownerName: "",
    brand: "",
    model: "",
    producedYear: "",
    transmission: "",
    registeredYear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your API call here
  };

  return (
    <div className="wrapper">
      <div className="form-container">
        <h2>Add New Car</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Produced Year</label>
            <input
              type="text"
              name="producedYear"
              value={formData.producedYear}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Transmission</label>
            <input
              type="text"
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Registered Year</label>
            <input
              type="text"
              name="registeredYear"
              value={formData.registeredYear}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Add Car</button>
        </form>
      </div>
    </div>  
  );
}

export default AddCar;
