import React, { useState, useEffect } from 'react';
import './ProfileDummy.css';
import Navi from '../Navigation/navi.jsx';
import Footer from '../Footer/Footer.jsx';
import { Link, useNavigate } from 'react-router-dom';

function Profile() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      // Redirect to login if no user data found
      navigate('/login');
    }
  }, [navigate]);

  if (!userData || Object.keys(userData).length === 0) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem('userData'); // Clear saved user data
    navigate('/Logout'); // Redirect to logout page
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
      </div>
      <Footer />
    </>
  );
}

export default Profile;
