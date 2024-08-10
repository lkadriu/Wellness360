import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Fajli CSS për Register

const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5004/api/account/register', form)
      .then(response => {
        alert('Registration successful');
        console.log(response.data);
      })
      .catch(error => {
        alert('Registration failed');
        console.error("There was an error registering!", error);
      });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="Username" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
