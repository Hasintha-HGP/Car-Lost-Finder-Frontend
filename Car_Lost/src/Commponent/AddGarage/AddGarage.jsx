import React, { useState } from "react";
import "./AddGarage.css";

const AddGarage = () => {
  const [formData, setFormData] = useState({
    ownerId: "",
    garageName: "",
    garageAddress: "",
    garageHome: "",
    garageSpecialization: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="wrapper">
      <div className="form-container">
        <h2>Add New Garage</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="garageName">Garage Name</label>
            <input
              type="text"
              id="garageName"
              name="garageName"
              value={formData.garageName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="garageAddress">Garage Address</label>
            <input
              type="text"
              id="garageAddress"
              name="garageAddress"
              value={formData.garageAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="garageHome">Garage Home</label>
            <input
              type="text"
              id="garageHome"
              name="garageHome"
              value={formData.garageHome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="garageSpecialization">Garage Specialization</label>
            <input
              type="text"
              id="garageSpecialization"
              name="garageSpecialization"
              placeholder="EV, Hybrid, PHEV"
              value={formData.garageSpecialization}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Add Garage</button>
        </form>
      </div>
    </div>  
  );
};

export default AddGarage;
