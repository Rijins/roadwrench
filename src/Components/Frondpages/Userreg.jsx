// components/UserReg/UserReg.jsx

import React from 'react';
import { TextField } from '@mui/material';
import { Button } from 'antd';
import './UserReg.css';

const UserReg = () => {
  return (
    <div className="user-reg-container">
        <h1>Register Here</h1>
        <TextField id="name" label="Name" variant="filled" className="text-field" />
      <TextField id="user_id" label="User_id" variant="filled" className="text-field" />
      <TextField id="email" label="Email" variant="filled" className="text-field" />
      <TextField id="pass" label="Password" variant="filled" className="text-field" />
      <TextField id="conpass" label="Confirm Password" variant="filled" className="text-field" />
      <Button variant="contained" className="register-button">
        Register
      </Button>
    </div>
  );
}

export default UserReg;
