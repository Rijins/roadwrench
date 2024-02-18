// components/LandingPage/LandingPage.jsx

import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <AppBar position="static" className="app-bar">
        <Toolbar>
        <Typography variant="h6" className="app-title">
            Road Wrench
          </Typography>
          <Button color="inherit" className="login-button">
            login
          </Button>
          
          <Button color="inherit" className="signup-button">
            Signup
          </Button>
        </Toolbar>
      </AppBar>

      <div className="content-container">
        <Typography variant="h2" className="main-heading">
          Road Wrench
        </Typography>
        <Typography variant="subtitle1" className="sub-heading">
          Your on-road partner
        </Typography>
      </div>
    </div>
  );
}

export default LandingPage;
