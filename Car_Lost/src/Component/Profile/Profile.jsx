import React, { useState, useEffect } from 'react';
import './Profile.css';
import Navi from '../Navigation/navi.jsx';
import Footer from '../Footer/Footer.jsx';
import UserService from '../Service/UserService.js';
import { Link, useNavigate } from 'react-router-dom';
import CarService from '../Service/CarService.js';
import UpdateUser from '../Service/UpdateUser.jsx';  
import GarageService from '../Service/GarageService.js';

function Profile() {
  const [userData, setUserData] = useState({});
  const [carData, setCarData] = useState([]);
  const [garageData, setGarageData] = useState([]);
  const [showUserInfo, setShowUserInfo] = useState(true);
  const [showCarInfo, setShowCarInfo] = useState(false);
  const [showGarageInfo, setShowgarageInfo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);  

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
        localStorage.setItem('userDetails', JSON.stringify(response)); 
        if (response && response.user) {
          setUserData(response.user);
        } else {
          console.error("Invalid response format:", JSON.stringify(response));
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
    const ownerId = userData.nic; 
    if (ownerId) {
      CarService.getCar(ownerId)
        .then((carResponse) => {
          console.log("Full API Car Response:", carResponse);
          localStorage.setItem('carDetails', JSON.stringify(carResponse))
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

  useEffect(() => {
    const ownerId = userData.nic; 
    if (ownerId) {
      GarageService.getGarage(ownerId)
        .then((garageResponse) => {
          console.log("Full API Garage Response:", garageResponse);
          localStorage.setItem('garageDetails', JSON.stringify(garageResponse))
          if (garageResponse && garageResponse.garages) {
            setGarageData(garageResponse.garages);
          } else {
            console.error("Invalid response format:", garageResponse);
          }
        })
        .catch((error) => {
          console.error("Error fetching garage data:", error);
          if (error.response?.status === 401) {
            localStorage.removeItem('token');
            navigate('/login');
          }
        });
    }
  }, [userData.nic, navigate]);

  const handleLogout = async () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('userDetails');
      localStorage.removeItem('role');
      localStorage.removeItem('rememberMe')
      localStorage.removeItem('carData')
      localStorage.removeItem('carDetails')
      navigate('/Logout');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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

        <div className="actions">
          <button onClick={() => setShowUserInfo(!showUserInfo)} className="btnprofile">
            {showUserInfo ? "Hide My Details" : "Show My Details"}
          </button>
          <button onClick={() => setShowCarInfo(!showCarInfo)} className="btnprofile">
            {showCarInfo ? "Hide Vehicles" : "My Vehicles"}
          </button>   
          <button onClick={() => setShowgarageInfo(!showGarageInfo)} className="btnprofile">
            {showGarageInfo ? "Hide Garages" : "My Garages"}
          </button> 
        </div>

        
        {showUserInfo && userData.name && (
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
        )}

        
        {showCarInfo && carData.length > 0 && (
          <div className="section vehicle-details">
            <h2>My Vehicles</h2>
            {carData.length > 0 ? (
              <div className="card-container">
                {carData.map((vehicle) => (
                  <div key={vehicle.id} className="card vehicle-card">
                    <div className="vehicle-info">
                      <p><strong>Vehicle Number:</strong> {vehicle.vehicleNumber}</p>
                      <p><strong>Brand:</strong> {vehicle.brand}</p>
                      <p><strong>Model:</strong> {vehicle.model}</p>
                      <p><strong>Produced Year:</strong> {vehicle.producedYear}</p>
                      <p><strong>Transmission:</strong> {vehicle.transmission}</p>
                      <p><strong>Vehicle Status:</strong> {vehicle.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No vehicles added yet.</p>
            )}
          </div>
        )}

      {showGarageInfo && garageData.length > 0 && (
          <div className="section vehicle-details">
            <h2>My Garages</h2>
            {garageData.length > 0 ? (
              <div className="card-container">
                {garageData.map((garage1) => (
                  <div key={garage1.id || `${garage1.garageName}-${garage1.garageAddress}`} className="card vehicle-card">
                  <div className="vehicle-info">
                  <p><strong>Garage Name:</strong> {garage1.garageName}</p>
                  <p><strong>Address:</strong> {garage1.garageAddress}</p>
                  <p><strong>Home Town:</strong> {garage1.garageHome}</p>
                  <p><strong>Specialization :</strong> {garage1.garageSpecialization}</p>
                </div>
              </div>
            ))}

              </div>
            ) : (
              <p>No vehicles added yet.</p>
            )}
          </div>
        )}

        {/* Bottom actions */}
        <div className="bottom-actions">
          <button onClick={handleLogout} className="logout">Logout</button>
          <button onClick={toggleModal} className="edit_profile">Edit Profile</button>
          <button className="add_car"><Link to='/Addcar'>Add Car</Link></button>
          <button className="add_garage"><Link to='/AddGarage'>Add Garage</Link></button>
        </div>

        {/* Modal for editing profile */}
        {isModalOpen && <UpdateUser closeModal={toggleModal} />}
      </div>
      <Footer />
    </>
  );
}

export default Profile;
