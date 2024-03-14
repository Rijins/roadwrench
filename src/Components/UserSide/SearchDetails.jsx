// SearchDetails.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Buffer } from 'buffer';
import './SearchDetails.css'; // Import CSS file

const SearchDetails = () => {
  const [details, setDetails] = useState({});
  const [image, setImage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/details/${id}`);
        setDetails(response.data);
        setImage(response.data.image1.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <div className="search-details-container">
      <Card>
        <CardMedia
          className="card-media"
          component="img"
          image={`data:image/jpeg;base64,${Buffer.from(image).toString('base64')}`}
          alt="Workshop"
        />
        <CardHeader title={details.Pin} />
        <CardContent>
          <p><strong>Workshop ID:</strong> {details.Workshopid}</p>
          <p><strong>Workshop Name:</strong> {details.Workshopname}</p>
          <p><strong>Phone Number:</strong> {details.Phonenumber}</p>
          <p><strong>WhatsApp Number:</strong> {details.Watsappnumber}</p>
          <p><strong>Address:</strong> {details.Address}</p>
          <p><strong>Email:</strong> {details.Email}</p>
          <p><strong>Owner Name:</strong> {details.Ownername}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchDetails;
