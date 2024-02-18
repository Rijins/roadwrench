import React, { useState } from 'react';
import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@mui/material';
import './Registration.css';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    workshopName: '',
    ownerName: '',
    userId: '',
    place: '',
    contactNumber: '',
    whatsappNumber: '',
    address: '',
    openFrom: 8,
    openTo: 18,
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:8000/register', formData);
      // Redirect to another page or update state to show registration success
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Paper className="reg-paper">
        <form className="reg-form" onSubmit={handleSubmit}>
          <h1>ADD WORKSHOP</h1>

          <TextField
            id="workshopName"
            name="workshopName"
            label="Workshop Name"
            variant="filled"
            value={formData.workshopName}
            onChange={handleChange}
          />
          <TextField
            id="ownerName"
            name="ownerName"
            label="Owner Name"
            variant="filled"
            value={formData.ownerName}
            onChange={handleChange}
          />
          <TextField
            id="userId"
            name="userId"
            label="User ID"
            variant="filled"
            value={formData.userId}
            onChange={handleChange}
          />
          <TextField
            id="place"
            name="place"
            label="Place"
            variant="filled"
            value={formData.place}
            onChange={handleChange}
          />
          <TextField
            id="contactNumber"
            name="contactNumber"
            label="Contact Number"
            variant="filled"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <TextField
            id="whatsappNumber"
            name="whatsappNumber"
            label="WhatsApp Number"
            variant="filled"
            value={formData.whatsappNumber}
            onChange={handleChange}
          />
          <TextField
            id="address"
            name="address"
            label="Address"
            variant="filled"
            value={formData.address}
            onChange={handleChange}
          />

          <InputLabel id="demo-simple-select-label">Open from</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="openFrom"
            value={formData.openFrom}
            label="from"
            onChange={handleChange}
          >
            <MenuItem value={8}>8:00 AM</MenuItem>
            <MenuItem value={9}>9:00 AM</MenuItem>
            <MenuItem value={10}>10:00 AM</MenuItem>
          </Select>

          <span>TO</span>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="openTo"
            value={formData.openTo}
            label="to"
            onChange={handleChange}
          >
            <MenuItem value={18}>6:00 PM</MenuItem>
            <MenuItem value={19}>7:00 PM</MenuItem>
            <MenuItem value={20}>8:00 PM</MenuItem>
            <MenuItem value={21}>9:00 PM</MenuItem>
            <MenuItem value={22}>10:00 PM</MenuItem>
            <MenuItem value={23}>11:00 PM</MenuItem>
          </Select>

          <TextField
            id="password"
            name="password"
            label="Password"
            variant="filled"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            variant="filled"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <Button variant="contained" color="success" className="reg-button" type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Registration;
