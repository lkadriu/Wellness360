// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5004/api/';

const register = (firstName, lastName, username, email, password) => {
  return axios.post(API_URL + 'Registers/register', {
    firstName,
    lastName,
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios.post(API_URL + 'Account/login', { email, password })
    .then(response => {
      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch(error => {
      console.error("There was an error logging in!", error);
      throw error;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
