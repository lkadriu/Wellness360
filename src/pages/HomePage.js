// src/components/HomePage.js
import React from 'react';
import './HomePage.css'; // Fajli CSS për HomePage

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Welcome to Your Health & Fitness App</h1>
                <p>Your one-stop solution for tracking and improving your health and wellness.</p>
            </header>
            <section className="home-features">
                <div className="feature">
                    <h2>Track Your Workouts</h2>
                    <p>Monitor and manage your exercise routines and progress.</p>
                </div>
                <div className="feature">
                    <h2>Manage Your Health Data</h2>
                    <p>Keep track of your health metrics and gain insights into your well-being.</p>
                </div>
                <div className="feature">
                    <h2>Get Expert Advice</h2>
                    <p>Access valuable tips and recommendations from health professionals.</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
