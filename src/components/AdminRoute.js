// src/components/AdminRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const AdminRoute = ({ element }) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  return isAuthenticated && user?.role === 'admin' ? element : <Navigate to="/" />;
};

export default AdminRoute;
