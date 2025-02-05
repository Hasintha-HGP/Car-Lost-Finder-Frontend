import React from 'react';
import "./NotificationPanel.css";

function NotificationPanel() {
  // Example static notifications, replace with dynamic data if needed
  const [notifications] = React.useState([
    {
      id: 1,
      username: "John Doe",
      message: "Your vehicle status has been updated!",
    },
    {
      id: 2,
      username: "Jane Smith",
      message: "A new vehicle has been registered in your area.",
    },
    {
      id: 3,
      username: "Mark Lee",
      message: "Someone has reported a vehicle theft in your region.",
    },
    {
      id: 4,
      username: "Emily Davis",
      message: "A new comment has been posted on your vehicle registration.",
    },
    {
      id: 5,
      username: "Chris Brown",
      message: "Your vehicle status has been marked as 'Recovered'.",
    },
  ]);

  return (
    <div className="notification-panel">
      <h3>Recent Entries</h3>
      <div className="notifications-container">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <strong>{notification.username}:</strong>
            <p>{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationPanel;
