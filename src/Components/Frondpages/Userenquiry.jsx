// components/UserEnquiry/UserEnquiry.jsx

import React from 'react';
import { Button, TextField, Card, CardContent, Icon } from '@mui/material';
import './UserEnquiry.css';
import PersonIcon from '@mui/icons-material/Person';

const UserEnquiry = () => {
  return (
    <Card className="user-enquiry-card">
        
      <CardContent>
        <TextField id="Name" label= "Name" variant="filled" className="text-field" />
        <br />
        <TextField id="MobNo" label="Mobile No" variant="filled" className="text-field" />
        <br />
        <Button variant="contained" color="primary" className="submit-button">
          Submit Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserEnquiry;
