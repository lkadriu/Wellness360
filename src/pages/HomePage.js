import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Krijo këtë file për stilizim

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Wellness360</h1>
      <p>Your personal health tracker and wellness assistant.</p>
      <div className="home-buttons">
        <Link to="/workouts" className="home-button">Workouts</Link>
        <Link to="/register-activity" className="home-button">Register Your Activities</Link>
        <Link to="/calories" className="home-button">Calories</Link>
        <Link to="/your-activities" className="home-button">Your Activities</Link>
        <Link to="/doctors-advices" className="home-button">Doctors' Advices</Link>
      </div>
    </div>
  );
};

export default HomePage;
