import React, { useState, useEffect } from 'react';
import './Profile.css';
import Navi from '../Navigation/navi.jsx';
import Footer from '../Footer/Footer.jsx';

function Profile() {
    
    const [userData, setUserData] = useState({
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      nic: "123456789V",
      city: "Colombo",
      job: "Software Engineer",
      photo: "https://www.w3schools.com/w3images/avatar2.png", 
      vehicles: [
        { id: 1, brand: "Toyota", model: "Corolla", photo: "https://via.placeholder.com/100", year: 2020, transmission: "Automatic" },
        { id: 2, brand: "Honda", model: "Civic", photo: "https://via.placeholder.com/100", year: 2021, transmission: "Manual" },
      ],
      garages: [
        { id: 1, name: "Downtown Garage", city: "Colombo" },
        { id: 2, name: "West Side Garage", city: "Kandy" },
      ],
    });
  
    
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [showVehicles, setShowVehicles] = useState(false);
    const [showGarages, setShowGarages] = useState(false);
  
    return (
        <>
        <Navi/>
     
     
      <div className="profile-dashboard">
        
        <div className="user-header">
          <div className="user-info">
            <h1>{userData.name}</h1>
            <p>{userData.job}</p>
          </div>
          <img src={userData.photo} alt="User" className="user-photo" />
        </div>
  
        
        <div className="actions">
          <button onClick={() => setShowUserInfo(!showUserInfo)} className="btnprofile">
            {showUserInfo ? "My Information" : "My Information"}
          </button>
          <button onClick={() => setShowVehicles(!showVehicles)} className="btnprofile">
            {showVehicles ? "My Vehicles" : "My Vehicles"}
          </button>
          <button onClick={() => setShowGarages(!showGarages)} className="btnprofile">
            {showGarages ? "My Garages" : "My Garages"}
          </button>
        </div>
  
        
        {showUserInfo && (
          <div className="section user-details">
            <h2>My Details</h2>
            <div className="card">
              <table cellSpacing={10}>
              <tr><td><p><strong>Email:</strong></p></td><td><p>{userData.email}</p></td></tr>
              <tr><td><p><strong>Phone Number:</strong></p></td><td><p> {userData.phone}</p></td></tr>
              <tr><td><p><strong>NIC:</strong> </p></td><td><p>{userData.nic}</p></td></tr>
              <tr><td><p><strong>City:</strong></p></td><td><p>{userData.city}</p></td></tr>
              </table>
            </div>
          </div>
        )}
  
        {showVehicles && (
          <div className="section vehicle-details">
            <h2>My Vehicles</h2>
            {userData.vehicles.length > 0 ? (
              <div className="card-container">
                {userData.vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="card vehicle-card">
                    <img src={vehicle.photo} alt={vehicle.brand} className="vehicle-photo" />
                    <div className="vehicle-info">
                      <p><strong>Brand:</strong>{vehicle.brand}</p>
                      <p><strong>Model:</strong>{vehicle.model}</p>
                      <p><strong>Year:</strong>{vehicle.year}</p>
                      <p><strong>Transmission:</strong>   {vehicle.transmission}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No vehicles added yet.</p>
            )}
          </div>
        )}
  
        {showGarages && (
          <div className="section garage-details">
            <h2>My Garages</h2>
            {userData.garages.length > 0 ? (
              <div className="card-container">
                {userData.garages.map((garage) => (
                  <div key={garage.id} className="card garage-card">
                    <p><strong>Garage Name:</strong> {garage.name}</p>
                    <p><strong>City:</strong> {garage.city}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No garages added yet.</p>
            )}
          </div>
        )}
  
        
        <div className="bottom-actions">
          <button className="logout"><a href='/Logout'>Logout</a></button>
          <button className="edit_profile"><a href='/Register'>Edit Profile</a></button>
          <button className="add_car"><a href='/Addcar'>Add Car</a></button>
          <button className="add_garage"><a href='/AddGarage'>Add Garage</a></button>
        </div>
      </div>
      <Footer/> 
      </>
    );
  }
  
  export default Profile;