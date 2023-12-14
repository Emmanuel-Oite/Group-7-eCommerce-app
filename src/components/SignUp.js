import React, { useState } from 'react';

const SignUp = ({ onSignUp, users }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    const isUsernameTaken = users.some((user) => user.username === username);

    if (isUsernameTaken) {
      setError('Username already taken. Please choose a different one.');
    } else {
      onSignUp(username, password);
      setUsername('');
      setPassword('');
      setError('');
    }
  };
  return (
    <div>
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