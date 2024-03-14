import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import "./UserLogin.css"; // Import your CSS file for styling

const UserLogin = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  const checkData = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/Loginsearch", {
        Email: inputs.email,
        Password: inputs.password,
      });
      if (response.data.success) {
        alert('Login successful');
        navigate('/search'); // Use history to navigate
      } else {
        alert('Invalid email and password. Please try again.');
      }
    } catch (err) {
      alert('Error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-form">
      <video className="background-video" src="/video/video1.mp4" autoPlay loop muted />
      <form>
        <TextField
          required
          id="outlined-required"
          label='Email'
          name="email"
          value={inputs.email}
          onChange={inputHandler}
        />
        <br /> <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          name="password"
          type="password"
          value={inputs.password}
          onChange={inputHandler}
        />
        <br /> <br />
        <Button variant="contained" onClick={checkData}>
          Login
        </Button>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default UserLogin;
