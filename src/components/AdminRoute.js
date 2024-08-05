import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const AdminRoute = ({ element }) => {
  const { user } = useContext(AuthContext);

  return user?.role === 'admin' ? element : <Navigate to="/" />;
};

export default AdminRoute;
