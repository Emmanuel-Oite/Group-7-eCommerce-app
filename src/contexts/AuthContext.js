
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

  const signUp = async (username, password) => {
    try {
      
      const response = await fetch('https://group-7-backend.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        
        setUsers((prevUsers) => [...prevUsers, { id: Date.now(), username, password }]);
        
      } else {
        throw new Error('Failed to sign up');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, users, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
