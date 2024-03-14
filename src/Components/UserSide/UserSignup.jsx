import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import axios from "axios";
import './UserSignup.css'; // Import your CSS file for styling
import { Link, Navigate } from 'react-router-dom';

const UserSignup = () => {
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
    axios.post("http://localhost:8080/user/newsignup", inputs)
      .then((response) => {
        alert("Successfully signed up");
        
      })
      .catch((err) => console.log(err));
  };

  

  return (
    <div className="signup-container">
      <video className="background-video" src="/video/video3.mp4" autoPlay loop muted />
      <form className="signup-form">
        <TextField
          id="filled-basic"
          label="User Name"
          required
          name="Username"
          variant="filled"
          value={inputs.Username}
          onChange={inputHandler}
        />
        <br />
        <TextField
          id="filled-basic"
          label="Email"
          required
          name="Email"
          variant="filled"
          value={inputs.Email}
          onChange={inputHandler}
        />
        <br />
        <TextField
          id="filled-basic"
          label="Password"
          required
          name="Password"
          variant="filled"
          value={inputs.Password}
          onChange={inputHandler}
        />
        <br />
        <Button variant="contained" onClick={addHandler}>SIGN UP</Button>

        <p>Already have an Account</p>
        <br />
        <Link to="/userlogin">LOGIN</Link>
      </form>
    </div>
  );
};

export default UserSignup;
