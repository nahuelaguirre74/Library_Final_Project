import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin();
    } else {
      setError('Please enter a valid username and password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
          id="username" 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          aria-required="true"
        />
        <label htmlFor="password">Password:</label>
        <input 
          id="password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          aria-required="true"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
