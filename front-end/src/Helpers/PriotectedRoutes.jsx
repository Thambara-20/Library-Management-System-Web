// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthentication from '../services/useAuthentication';

function ProtectedRoute({ element, requiredRole }) {
  const { user } = useAuthentication();

  if (!user) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Redirect to a forbidden page if the user's role doesn't match
    return <Navigate to="/forbidden" />;
  }

  return element;
}

export default ProtectedRoute;
