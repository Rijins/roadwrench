// LandingPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import your CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <h1 className="landing-heading">ROAD WRENCH</h1>
      <img
        src="https://i.pinimg.com/originals/0e/50/c2/0e50c2395ce120082508aa6ac80ef16b.jpg"
        alt="Road Wrench Image"
        className="landing-image"
      />
      <p className="landing-text">
        In the face of unexpected vehicle breakdowns,our website emerges as a crucial solution.<br/> Leveraging advanced geolocation technology,<br/> 
         the platform swiftly identifies the user's location and connects them with the nearest workshops.<br/>
          This real-time service ensures quick assistance, reducing downtime.<br/> Users can access detailed workshop information,
           customer reviews, and contact details,<br/> facilitating seamless communication and efficient issue resolution. 
           Our website serves as a lifeline, <br/>transforming vehicle breakdowns into manageable experiences with immediate and transparent solutions.
      </p>
      <br/><br/>
      <p className="landing-motto">
        <i>-Explore our services and keep your journey safe and smooth.</i>
      </p>
      <Link to="/signup">
        <button className="signup-button">Sign Up</button>
      </Link>
    </div>
  );
};

export default LandingPage;
