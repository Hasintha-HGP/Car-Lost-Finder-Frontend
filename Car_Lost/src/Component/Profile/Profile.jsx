import React, { useState, useEffect } from 'react';
import './Profile.css';
import Navi from '../Navigation/navi.jsx';
import Footer from '../Footer/Footer.jsx';
import UserService from '../Service/UserService.js';
import { Link, useNavigate } from 'react-router-dom';

function Profile() {
  const [response,setApiResponse] = useState({});
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if no token is found
      return;
    }

    UserService.getProfile()
      .then((response) => {
        console.log("Full API Response:", response); // Log full response
        setApiResponse(response);

        if (response) {
          console.log("User Data:", response.user);
          setUserData(response.user);
        } else {
          console.error("Invalid response format:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        if (error.response) {
          console.log("Error Response:", error.response);
        }
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      });
  },[]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST', credentials: 'include' });
      localStorage.removeItem('token'); // If using JWT
      navigate('/Logout'); // Redirect to login page
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
                <tr><td><strong>Phone:</strong></td><td>{userData.name}</td></tr>
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
      </div>
      <Footer />
    </>
  );
}

export default Profile;
