import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./NotificationPanel.css";

function LostVehiclePanel() {
  const [lostVehicles, setLostVehicles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/lostCars') 
      .then(response => {
        if (response.data.statusCode === 200) {
          setLostVehicles(response.data.cars);
        } else {
          setError("No lost vehicles found.");
        }
      })
      .catch(error => {
        console.error("Error fetching lost vehicles:", error);
        setError("Failed to fetch lost vehicle data.");
      });
  }, []);

  return (
    <div className="notification-panel">
      <h3>RECENT ENTRIES</h3>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="notifications-container">
          {lostVehicles.map(vehicle => (
            <div key={vehicle.id} className="notification-item">
              <strong>{vehicle.vehicleNumber}</strong><h4 className="status-lost">{vehicle.status}</h4>
              <p>Name of the Owner: {vehicle.ownerName}</p>
              <p>Brand: {vehicle.brand} ({vehicle.model})</p>
              <p>Transmission: {vehicle.transmission}</p>
              <p>Stolen Location: {vehicle.stolenLocation}</p>
              <p>Stolen Date: {new Date(vehicle.stolenTimeStamp).toLocaleString()}</p>
              <p>If you have any information please contact: {vehicle.emergencyContact}</p>
              <p>Special Visual Modifications {vehicle.visualModifications}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LostVehiclePanel;
