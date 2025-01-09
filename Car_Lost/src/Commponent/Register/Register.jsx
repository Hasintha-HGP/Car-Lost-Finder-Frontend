import React, { useState } from 'react';
import './Register.css'; // Ensure to import the CSS file

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nic: '',
    fullName: '',
    sex: '',
    job: '',
    streetNumber: '',
    street: '',
    city: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

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

    // Validate password
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$/.test(formData.password)) {
      errors.password = 'Password must be at least 8 characters, include uppercase, lowercase letters, and a number';
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      console.log(formData);
    }
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
     <input type="text" name="nic" value={formData.nic} onChange={handleChange} required />
      {errors.nic && <p className="error-message">{errors.nic}</p>}
      </div>

      <div className="form-group">
        <label className="required">Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label className="required">Sex:</label>
        <select name="sex" value={formData.sex} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label className="required">Job:</label>
        <input type="text" name="job" value={formData.job} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label className="required">Street Number:</label>
        <input type="text" name="streetNumber" value={formData.streetNumber} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label className="required">Street:</label>
        <input type="text" name="street" value={formData.street} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label className="required">City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label className="required">Phone Number:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
      </div>

      <div className="form-group">
        <label className="required">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label className="required">Password:</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
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
          onChange={handleChange}
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
};

export default RegisterForm;
