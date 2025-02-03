import React, { useState, useEffect } from 'react';
import './Profile.css';
import Navi from '../Navigation/navi.jsx';
import Footer from '../Footer/Footer.jsx';
import UserService from '../Service/UserService.js';
import { Link, useNavigate } from 'react-router-dom';
import CarService from '../Service/CarService.js';

function Profile() {
  const [userData, setUserData] = useState({});
  const [carData, setCarData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); 
      return;
    }

    UserService.getProfile()
      .then((response) => {
        console.log("Full API Response:", response);
        if (response && response.user) {
          setUserData(response.user);
        } else {
          console.error("Invalid response format:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      });
  }, [navigate]);

  useEffect(() => {
    const ownerId = userData.nic; // Assuming NIC is used as ownerId
    if (ownerId) {
      CarService.getCar(ownerId)
        .then((carResponse) => {
          console.log("Full API Car Response:", carResponse);
          if (carResponse && carResponse.cars) {
            setCarData(carResponse.cars);
          } else {
            console.error("Invalid response format:", carResponse);
          }
        })
        .catch((error) => {
          console.error("Error fetching car data:", error);
          if (error.response?.status === 401) {
            localStorage.removeItem('token');
            navigate('/login');
          }
        });
    }
  }, [userData.nic, navigate]);

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST', credentials: 'include' });
      localStorage.removeItem('token');
      navigate('/Logout');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <Navi />
      <div className="profile-dashboard">
        <div className="user-header">
          <div className="user-info">
            <h1>{userData.name}</h1>
            <p>{userData.job}</p>
          </div>
        </div>

        <div className="section user-details">
          <h2>My Details</h2>
          <div className="card">
            <table cellSpacing={10}>
              <tbody>
                <tr><td><strong>Email:</strong></td><td>{userData.email}</td></tr>
                <tr><td><strong>Phone:</strong></td><td>{userData.phone}</td></tr>
                <tr><td><strong>NIC:</strong></td><td>{userData.nic}</td></tr>
                <tr><td><strong>City:</strong></td><td>{userData.city}</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bottom-actions">
          <button onClick={handleLogout} className="logout">Logout</button>
          <button className="edit_profile"><Link to='/Register'>Edit Profile</Link></button>
          <button className="add_car"><Link to='/Addcar'>Add Car</Link></button>
          <button className="add_garage"><Link to='/AddGarage'>Add Garage</Link></button>
        </div>

        <div className="section vehicle-details">
          <h2>My Vehicles</h2>
          {carData.length > 0 ? (
            <div className="card-container">
              {carData.map((vehicle) => (
                <div key={vehicle.id} className="card vehicle-card">
                  <div className="vehicle-info">
                    <p><strong>Brand:</strong> {vehicle.brand}</p>
                    <p><strong>Model:</strong> {vehicle.model}</p>
                    <p><strong>Produced Year:</strong> {vehicle.producedYear}</p>
                    <p><strong>Transmission:</strong> {vehicle.transmission}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No vehicles added yet.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
