import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean; // Default to true
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAuth = true 
}) => {
  const { user, loading, token } = useAuth();
  const location = useLocation();

  // Additional security check: verify token exists in localStorage
  useEffect(() => {
    if (!loading && requireAuth) {
      const storedToken = localStorage.getItem('token');
      if (!storedToken || !token) {
        // Clear any stale data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
  }, [loading, requireAuth, token]);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300">Verifying access...</p>
        </div>
      </div>
    );
  }

  // If authentication is required but user is not logged in
  if (requireAuth && (!user || !token)) {
    // Store the attempted location for redirect after login
    const from = location.pathname + location.search;
    return <Navigate to={`/login?redirect=${encodeURIComponent(from)}`} replace />;
  }

  // If user is logged in but trying to access auth pages, redirect to dashboard
  if (!requireAuth && user && token) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

