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
