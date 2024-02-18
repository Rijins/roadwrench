import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const AdminLogin = () => {
  const [user_id, setUser_id] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Login successful, handle accordingly (e.g., redirect to another page)
        console.log('Login successful');
      } else {
        // Login failed, handle accordingly (e.g., show error message)
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container fade-in">
      <TextField
        id="filled-basic"
        label="User_id"
        variant="filled"
        className="text-field"
        value={user_id}
        onChange={(e) => setUser_id(e.target.value)}
      />
      <br />
      <br />
      <TextField
        id="filled-basic"
        label="Password"
        variant="filled"
        className="text-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" color="success" className="button" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default AdminLogin;
