import React, { useState } from "react";
import axios from "axios";
import "./AddGarage.css";
import { useNavigate } from "react-router-dom";

const AddGarage = () => {
  const [formData, setFormData] = useState({
    ownerId: "",
    garageName: "",
    garageAddress: "",
    garageHome: "",
    garageSpecialization: "",
    garageHotline:""
  });

  const [responseMessage, setResponseMessage] = useState(""); 
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://13.201.14.76:8080/registerGarage", formData); 
      if (response.status === 200) {
        alert("Garage added successfully!");
        navigate("/Myprofile");
      } else {
        setResponseMessage("Failed to add garage.");
      }
    } catch (error) {
      console.error("There was an error!", error);
      setResponseMessage("Error adding garage. Please try again.");
    }
  };

  return (
    <div className="wrapper1">
      <div className="form-container1">
        <h2>Add New Garage</h2>
        <form className="form1" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="ownerId">NIC of the Owner</label>
            <input
              type="text"
              id="ownerId"
              name="ownerId"
              value={formData.ownerId}
              onChange={handleChange}
              required
            />
          </div>
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
            <label htmlFor="garageHome">Garage Home City</label>
            <input
              type="text"
              id="garageHome"
              name="garageHome"
              placeholder="Kandy,Colombo likewise"
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
          <div className="form-group">
            <label htmlFor="garageHotline">Hotline Number</label>
            <input
              type="text"
              id="garageHotline"
              name="garageHotline"
              value={formData.garageHotline}
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
