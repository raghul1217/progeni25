import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  const location = useLocation(); // Get the current location (route)

  return token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
}

export default ProtectedRoute;
