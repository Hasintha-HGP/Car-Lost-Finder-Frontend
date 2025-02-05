import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "./UserService";

function UpdateUser({ closeModal }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    job: "",
    city: "",
    phone: "",
  });

  // Load user data from localStorage
  useEffect(() => {
    const storedUserDetails = localStorage.getItem("userDetails");
    if (storedUserDetails) {
      const storedUser = JSON.parse(storedUserDetails).user;
      if (storedUser) {
        setUserData({
          id: storedUser.id || "",
          name: storedUser.name || "",
          email: storedUser.email || "",
          job: storedUser.job || "",
          city: storedUser.city || "",
          phone: storedUser.phone || "",
        });
      } else {
        alert("User data not found. Please log in again.");
        navigate("/login");
      }
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const confirmEdit = window.confirm("Are you sure you want to update your profile?");
      if (confirmEdit) {
        // Log the user data before submitting
        console.log("Submitting user data:", userData);

        const response = await UserService.updateUser(userData.id, userData);  // No token here

        // Log the response from the backend
        console.log("Response from backend:", response);

        if (response && response.statusCode === 200) {
          alert("Profile updated successfully!");
          const updatedDetails = { ...JSON.parse(localStorage.getItem("userDetails")), user: userData };
          localStorage.setItem("userDetails", JSON.stringify(updatedDetails));

          navigate("/MyProfile"); // Redirect to profile
          closeModalAndRefresh(); // Close the modal and refresh the page after successful update
        } else {
          alert("Failed to update profile.");
        }
      }
    } catch (error) {
      console.error("Error updating user profile", error);
      alert("Failed to update profile.");
    }
  };

  // Close modal and refresh the page after successful update
  const closeModalAndRefresh = () => {
    closeModal();  // Close the modal
    window.location.reload();  // Refresh the page after modal closes
  };

  const handleRestore = () => {
    const storedUser = JSON.parse(localStorage.getItem("userDetails"))?.user;
    if (storedUser) {
      setUserData({
        id: storedUser.id || "",
        name: storedUser.name || "",
        email: storedUser.email || "",
        job: storedUser.job || "",
        city: storedUser.city || "",
        phone: storedUser.phone || "",
      });
      alert("Data restored to the original values.");
    }
  };

  // Inline Styles for Modal and Form
  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "block",  // Ensure modal is visible when open
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    color: "#555",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "15px",
    outline: "none",
    fontSize: "14px",
    backgroundColor: "#fff",
    color: "#000",  // Ensure text is visible
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  };

  const buttonStyle = {
    width: "48%",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
  };

  const updateButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#007BFF",
  };

  const restoreButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#DC3545",
  };

  return (
    <>
      {/* Modal Overlay */}
      <div style={modalOverlayStyle} onClick={closeModal}>
        {/* Modal Content */}
        <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
          <h2 style={headingStyle}>Update Profile</h2>
          <form key={userData.id} onSubmit={handleSubmit}>
            {["name", "email", "job", "city", "phone"].map((field) => (
              <div key={field}>
                <label style={labelStyle}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={userData[field] || ""}  
                  onChange={handleInputChange}
                  style={inputStyle}
                  required
                />
              </div>
            ))}
            <div style={buttonContainerStyle}>
              <button type="submit" style={updateButtonStyle}>
                Update
              </button>
              <button type="button" onClick={handleRestore} style={restoreButtonStyle}>
                Restore
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;
