import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthResponse } from '../types/auth';
import api from '../lib/api';
import { showInfoToast, showSuccessToast, showErrorToast } from '../lib/toast';
import { getStoredAuthData, clearAuthData, isTokenValid } from '../lib/routeUtils';

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { token: storedToken, user: storedUser, isValid } = getStoredAuthData();
    
    if (storedToken && storedUser && isValid) {
      setToken(storedToken);
      setUser(storedUser);
    } else if (storedToken || storedUser) {
      // Clear invalid data
      clearAuthData();
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post<AuthResponse>('/api/auth/login', {
        email,
        password,
      });

      const { token: newToken, name, email: userEmail } = response.data;
      const userData: User = { id: 0, name, email: userEmail };

      setToken(newToken);
      setUser(userData);
      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(userData));
      showSuccessToast('Login successful');
    } catch (error: any) {
      const message = error.response?.data?.error || 'Invalid credentials';
      showErrorToast(message);
      throw new Error(message);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await api.post<AuthResponse>('/api/auth/register', {
        name,
        email,
        password,
      });

      // Don't auto-login after registration, just show success message
      showSuccessToast('Registration complete, please login');
    } catch (error: any) {
      const message = error.response?.data?.error || 'Registration failed';
      showErrorToast(message);
      throw new Error(message);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    clearAuthData();
    showInfoToast('Logged out successfully');
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

