import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiRequest } from '../utils/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      apiRequest('/profile', { token })
        .then(setUser)
        .catch(() => logout());
    }
    setLoading(false);
    // eslint-disable-next-line
  }, [token]);

  const login = async (email, password) => {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: { email, password },
    });
    setToken(data.token);
    localStorage.setItem('token', data.token);
    setUser(data.student);
  };

  const signup = async (name, email, password) => {
    const data = await apiRequest('/auth/signup', {
      method: 'POST',
      body: { name, email, password },
    });
    setToken(data.token);
    localStorage.setItem('token', data.token);
    setUser(data.student);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 