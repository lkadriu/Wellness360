import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        {isAuthenticated ? (
          <>
            {user?.role === 'admin' && <li className="navbar-item"><Link to="/admin-dashboard">Admin Dashboard</Link></li>}
            {user?.role === 'admin' && <li className="navbar-item"><Link to="/food-management">Food Management</Link></li>}
            <li className="navbar-item"><Link to="/workouts">Workouts</Link></li>
            <li className="navbar-item"><Link to="/register-activity">Register Run Activity</Link></li>
            <li className="navbar-item"><Link to="/calories">Calories</Link></li>
            <li className="navbar-item"><Link to="/your-activities">Your Runs</Link></li>
            <li className="navbar-item"><Link to="/food-informations">Food Informations</Link></li>
            <li className="navbar-item"><Link to="/health-data">Health Data</Link></li>
            <li className="navbar-item"><Link to="/health-view"> Your Health Data</Link></li>
            <li className="navbar-item"><Link to="/doctors-advices">Doctors Advices</Link></li>
            <li className="navbar-item">
              <button className="logout-button" onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="navbar-item"><Link to="/login">Login</Link></li>
            <li className="navbar-item"><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
