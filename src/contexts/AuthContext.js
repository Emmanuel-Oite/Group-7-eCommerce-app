// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  // Fetch users from your db.json on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/path-to-your-db.json');
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures this effect runs once on mount

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  const signUp = (username, password) => {
    // Implement the logic to handle sign-up, e.g., making an API call to add a new user.
    console.log('Signing up:', username, password);
    // You can also call login here if you want to automatically log in the user after signing up.
    // login(username);
  };

  return (
    <AuthContext.Provider value={{ user, users, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
