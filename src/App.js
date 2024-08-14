import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import DoctorsAdvices from './pages/DoctorsAdvices';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import RegisterActivity from './pages/RegisterActivity';
import ViewActivities from './pages/ViewActivities';
import FoodInformations from './pages/FoodInformations';
import Workouts from './pages/Workouts';
import HealthDataForm from './pages/HealthDataForm';
import HealthDataList from './pages/HealthDataList';
import CrudPage from './pages/CrudPage';

const App = () => {
  return (
    <AuthProvider>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
            <Route path="/workouts" element={<PrivateRoute element={<Workouts />} />} />
            <Route path="/register-activity" element={<PrivateRoute element={<RegisterActivity />} />} />
            <Route path="/your-activities" element={<PrivateRoute element={<ViewActivities />} />} />
            <Route path="/food-informations" element={<PrivateRoute element={<FoodInformations />} />} />
            <Route path="/health-data" element={<PrivateRoute element={<HealthDataForm />} />} />
            <Route path="/health-view" element={<PrivateRoute element={<HealthDataList />} />} />
            <Route path="/doctors-advices" element={<PrivateRoute element={<DoctorsAdvices />} />} />
            <Route path="/crud-page" element={<PrivateRoute element={<CrudPage />} />} />
            <Route path="/admin-dashboard" element={<AdminRoute element={<AdminDashboard />} />} />
          </Routes>
        </div>
    </AuthProvider>
  );
};

export default App;
