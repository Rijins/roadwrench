
import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import axios from "axios";
import './UserSignup.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const UserSignup = () => {
  // ... (your existing code)
  const [inputs, setInputs] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const addHandler = () => {
    axios.post("http://localhost:8080/admin/newsignup", inputs)
      .then((response) => {
        alert("Successfullyy signedup");
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="signup-container">
      {/* ... (your existing JSX) */}
        <TextField
        id="filled-basic"
        label="User Name" required
        name="Username"
        variant="filled"
        value={inputs.Username}
        onChange={inputHandler}
      />
      
      
      
      <br />
      <TextField
        id="filled-basic"
        label="Email" required
        name="Email"
        variant="filled"
        value={inputs.Email}
        onChange={inputHandler}
      />
      <br />
      <TextField
        id="filled-basic"
        label="Password" required
        name="Password"
        variant="filled"
        value={inputs.Password}
        onChange={inputHandler}
      />
      <br />
      <Button variant="contained" onClick={addHandler}>SIGNUP</Button>
      <p>Already have an Account</p>
      <br />
      <Link to="/userlogin">LOGIN</Link>
    </div>
  );
};

export default UserSignup;


