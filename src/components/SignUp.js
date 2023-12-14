
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../index.css';

const SignUp = () => {
  const { signUp } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      await signUp(username, password);
      setUsername('');
      setPassword('');
      setError('');
    } catch (error) {
      setError('Error signing up. Please try again.');
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
      <button onClick={handleSignUp}>Sign Up</button>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignUp;
