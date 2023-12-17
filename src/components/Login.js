// src/components/Login.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../index.css';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://group-7-backend.onrender.com/users');
      const userData = await response.json();

      const user = userData.find((user) => user.username === username && user.password === password);

      if (user) {
        login(username);
        setError('');
      } else {
        setError('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <p>
        Don't have an account?{' '}
        <button onClick={() => alert('Redirect to sign-up page.')}>Sign Up</button>
      </p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
