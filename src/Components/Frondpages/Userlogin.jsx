

import React from 'react';
import { Button, TextField } from '@mui/material';
import './Userlogin.css';

const UserLogin = () => {
  return (
    <div className="user-login-container fade-in">
      <h1>Login</h1>
      <TextField
        id="user-id"
        label="User_id"
        variant="filled"
        className="text-field"
      />
      <br />
      <br />
      <TextField
        id="password"
        label="Password"
        variant="filled"
        className="text-field"
      />
      <br />
      <br />
      <Button variant="contained" color="primary" className="login-button">
        Login
      </Button>
    </div>
  );
}

export default UserLogin;
