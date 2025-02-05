import React, { useState } from "react";
import "./AddCar.css"; 
import { useNavigate } from "react-router-dom";
import CarService from '../Service/CarService.js';

function AddCar() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    ownerId: "",
    ownerName: "",
    brand: "",
    model: "",
    producedYear: "",
    transmission: "",
    registeredYear: "",
    vehicleNumber:"",
  });

  const handleChange = (e) => {
    const { name, value, } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    
    try{
    const carData={...formData}
    await CarService.register(carData);

    localStorage.setItem('carData',JSON.stringify(carData));

    setFormData({
      ownerId: "",
      ownerName: "",
      brand: "",
      model: "",
      producedYear: "",
      transmission: "",
      registeredYear: "",
      vehicleNumber:"",
    });
    alert("Car Registered Successfully");
        navigate('/MyProfile');
  }
      catch(error){
  console.error('Error Registering Car',error);
        alert('An error occcured while registering Car');
}
};

  return (
    <div className="wrapper2">
      <div className="form-container2">
        <h2>Add New Car</h2>
        <form onSubmit={handleSubmit} className="form">
          
          <table cellSpacing={37}>
          <tr>
            <td>
            <div className="form-group">
            <label>Owner NIC</label>
            <input
              type="text"
              name="ownerId"
              value={formData.ownerId}
              onChange={handleChange}
              required
            />
            </div>
            </td>
            
            <td>
            <div className="form-group">
            <label>Owner Name</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              required
            />
            </div>
            </td>
            
          </tr>

          <tr>
            
            <td>
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
            </td>
          
            <td>
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
            </td>
          </tr>
          <tr>
            
            <td>
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
            </td>
          
            <td>
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
            </td>
            
          </tr>
          <tr>
            
            <td>
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
            </td>
            
            <td>
            <div className="form-group">
            <label> Vehicle Number</label>
            <input
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              required
            />
            </div>
            </td>
            
            </tr> 
         </table>
          <button type="submit" className="submit-button1">Add Car</button>
        </form>
      </div>
    </div>  
  );
}

export default AddCar;
