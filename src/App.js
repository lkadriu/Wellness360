// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FoodManagement from './pages/FoodManagement';
import HealthTracker from './pages/HealthTracker';
import Navbar from './components/Navbar';
import DoctorsAdvices from './pages/DoctorsAdvices';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
            <Route path="/food-management" element={<PrivateRoute element={<FoodManagement />} />} />
            <Route path="/workouts" element={<PrivateRoute element={<HealthTracker />} />} />
            <Route path="/register-activity" element={<PrivateRoute element={<HealthTracker />} />} />
            <Route path="/calories" element={<PrivateRoute element={<HealthTracker />} />} />
            <Route path="/your-activities" element={<PrivateRoute element={<HealthTracker />} />} />
            <Route path="/doctors-advices" element={<PrivateRoute element={<DoctorsAdvices />} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
