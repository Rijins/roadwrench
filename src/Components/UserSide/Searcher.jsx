// Searcher.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import { Button, Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';
import { Buffer } from 'buffer';

const Searcher = () => {
  const [view, setView] = useState([]);
  const [searchitem, setSearchitem] = useState('');

  const readSearchValue = (event) => {
    event.preventDefault();
    setSearchitem(event.target.value);
  };

  const searchHandler = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/user/search?cn=${searchitem}`);
      setView(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='search-container'>
      <video className="background-video" src="/video/video2.mp4" autoPlay loop muted />
      <div style={{ display: 'grid', placeItems: 'center', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
        <TextField label="Search your Pin" variant="outlined" value={searchitem} onChange={readSearchValue} /><br />
        <Button variant="contained" onClick={searchHandler}>Search</Button>
      </div>
      <Grid container spacing={3} className='card-container'>
        {view.map((value, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <Link
                to={{
                  pathname: `/searchDetails/${value._id}`,
                  state: { details: value, image: value.image1.data }
                }}
                style={{ textDecoration: 'none' }}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={`data:image/jpeg;base64,${Buffer.from(value.image1.data).toString('base64')}`}
                  alt="Workshop"
                />
                <CardHeader title={value.Pin} />
                <CardContent style={{ color: "black" }}>
                  <p style={{ color: "black" }}><strong>Workshop ID:</strong> {value.Workshopid}</p>
                  <p style={{ color: "black" }}><strong>Workshop Name:</strong> {value.Workshopname}</p>
                  <p style={{ color: "black" }}><strong>Phone Number:</strong> {value.Phonenumber}</p>
                  <p style={{ color: "black" }}><strong>WhatsApp Number:</strong> {value.Watsappnumber}</p>
                  <p style={{ color: "black" }}><strong>Address:</strong> {value.Address}</p>
                  <p style={{ color: "black" }}><strong>Email:</strong> {value.Email}</p>
                  <p style={{ color: "black" }}><strong>Owner Name:</strong> {value.Ownername}</p>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Searcher;
