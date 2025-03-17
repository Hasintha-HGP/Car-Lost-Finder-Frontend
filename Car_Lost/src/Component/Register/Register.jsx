import React, { useState,useEffect } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import UserService from '../Service/UserService';

function RegisterPage(){
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nic: '',
    name: '',
    sex: '',
    job: '',
    city: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    role:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (validate()) {
            const userData = { ...formData, role: "USER" };

            // Call the register function from the UserService
            const response = await UserService.register(userData);

            // Assuming the response from the backend has a status code and message
            if (response.statusCode === 400) {
                // Display the error message (e.g., "Email already exists")
                alert(response.message || 'Email Already Exists. Try a different one.');
            } else {
                // If registration is successful, store user data and reset the form
                localStorage.setItem('userData', JSON.stringify(userData));
                setFormData({
                    nic: '',
                    name: '',
                    sex: '',
                    job: '',
                    city: '',
                    phone: '',
                    email: '',
                    password: '',
                    role: ''
                });
                alert("User Registered Successfully");
                navigate('/Login');
            }
        }
    } catch (error) {
        console.error('Error Registering User:', error);
        alert('Email Already Exists. Try a different one.');
    }
};



  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  
  const validate = () => {
    let errors = {};
    
    if (!/^\d{9}[Vv]$|^\d{12}$/.test(formData.nic)) {
        errors.nic = 'NIC must be 9 digits followed by V, or 12 digits.';
      }
    // Validate phone number
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be exactly 10 digits';
    }

    // Validate password security
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/~`|\\-])[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/~`|\\-]{8,}$/.test(formData.password)) {
      errors.password = 'Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.';
    }
  

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
    <div className='RegisterMain'>
        <div className='RegisterMain2'>
            <h1>Register Form</h1>
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="form-group">
      <label className="required">NIC:</label>
     <input type="text" name="nic" value={formData.nic} onChange={handleInputChange} required />
      {errors.nic && <p className="error-message">{errors.nic}</p>}
      </div>

      <div className="form-group">
        <label className="required">Full Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </div>

      <div className="form-group">
        <label className="required">Sex:</label>
        <select name="sex" value={formData.sex} onChange={handleInputChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label className="required">Job:</label>
        <input type="text" name="job" value={formData.job} onChange={handleInputChange} required />
      </div>


      <div className="form-group">
        <label className="required">City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
      </div>

      <div className="form-group">
        <label className="required">Phone Number:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
      </div>

      <div className="form-group">
        <label className="required">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
      </div>
      

      <div className="form-group">
        <label className="required">Password:</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="button" onClick={toggleShowPassword} style={{ marginLeft: '10px' }}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>

      <div className="form-group">
        <label className="required">Confirm Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
        />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
      </div>

      <button type="submit" className="submit-button3">Register</button>
    </form>
    </div>
    </div>
    </>
  );
}
export default RegisterPage;
